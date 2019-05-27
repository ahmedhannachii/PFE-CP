import { ApolloServer, gql } from 'apollo-server';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/user';
import News from './models/news';
import Categories from './models/categories';

// generate token
const SECRET = 'mysecret';

function generateToken(id, email) {
  const token = jwt.sign({ id, email }, SECRET);
  return token;
}

function verifyToken(token) {
  try {
    const { id } = jwt.verify(token, SECRET);
    return id;
  } catch (err) {
    return null;
  }
}

//schema 

const typeDefs = gql`
input NewsInput {
 titre : String! 
 description : String 
 image : String 
 prix : String
}
  input UserInput {
    email: String!
    password: String!
    userName: String!
    lastName: String
    date: String
    permission: String
  }
  input UserUpdateInput {
    id: ID!
    email: String!
    userName: String!
    lastName: String
    date: String
    permission: String
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input passwordInput {
    oldPassword: String!
    newPassword: String!
  }
  input CategoriesInput {
    titre: String! 
  }
  type UserLogged {
    token: String
    user: User
  }
  type News {
 id: ID
 titre: String 
 description: String 
 image: String 
 prix: String
  }

  type User {
    id : ID!
    email: String!
    password: String
    userName: String
    lastName: String
    date: String
    permission: String
  }

  type Categories {
 id: ID
 titre: String! 
  }

  type Query {

    users: [User]
    user(id:ID!): User
    me: User
    news : [News]
    categories: [Categories]
  }
  type Mutation {
    addNews(input: NewsInput): News
    removeNews(id: ID!): Boolean
    register(input: UserInput): UserLogged
    login(input: LoginInput): UserLogged
    updateUser(input: UserUpdateInput): User
    removeUser(id: ID!): Boolean
    addCategories(input: CategoriesInput): Categories
    removeCategories(id: ID!): Boolean
  }
`;

// resolvers

const resolvers = {
  Query: {
    users: async (_, $, { models }) => {
      const users = await models.User.find();
      return users;
    },
    me: (_, $, { models, userId }) => models.User.findOne({ _id: userId }),

    user: (_, { id }, { models }) => models.User.findOne({ _id: id }),
    news : async (_, $, {models}) => {
      const article = await models.News.find();
    return article;
    },
    categories : async (_, $, {models}) => {
      const categorie = await models.Categories.find();
    return categorie;
    },
  },
  Mutation: {
    addNews: async (_, { input }, { models }) =>{
      const article = new models.News({
        titre: input.titre,
        description: input.description,
        image: input.image, 
        prix: input.prix,
      })
     const addNews =  await article.save();
      return addNews;
    },
    removeNews: async (_, { id }) => {
      await News.findByIdAndRemove(id);
      return true;
    },
  
    // User save as a model.user
    register: async (_, { input }, { models }) => {
      const hashPassword = await bcrypt.hash(input.password, 3);
      const user = new models.User({
        ...input,
        password: hashPassword
      });
      await user.save();
      const token = generateToken(user.id, user.email);
      return { token, user };
    },

    login: async (_, { input }, { models }) => {
      // console.log(input);
      const currentUser = await models.User.findOne({ email: input.email });
      if (!currentUser) {
        throw new Error('User not found');
      }
      const correctPassword = await bcrypt.compare(input.password, currentUser.password);
      if (!correctPassword) {
        throw new Error('Wrong Password');
      }
      const token = generateToken(currentUser.id, currentUser.email, currentUser.permission);
      return { token, user: currentUser };
    },

    updateUser: async (_, {input}) => {
      console.log(input)
      const { id } = input;
      const updateUser = await User.findOneAndUpdate({ _id: id }, { $set: input }, {new: true});
      console.log("TCL: updateUser", updateUser)  
      return updateUser;
    },

    
    removeUser: async (_, { id }) => {
      await User.findByIdAndRemove(id);
      return true;
    },
    addCategories: async (_, { input }, { models }) =>{
      const categorie = new models.Categories({
        titre: input.titre,
      })
     const addCategories =  await categorie.save();
      return addCategories;
    },
    removeCategories: async (_, { id }) => {
      await Categories.findByIdAndRemove(id);
      return true;
    },
  },
};

// ApolloServer can be started
// passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const userId = verifyToken(req.headers.authorization);
    return {
      userId,
      models: {
        User,
        News,
        Categories
      },
    };
  },
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options
mongoose.connect('mongodb://localhost:27017/training', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongodb');
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  });
