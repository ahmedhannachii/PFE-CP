import { ApolloServer, gql } from 'apollo-server';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/user';
import News from './models/news';


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
 description: String 
 image : String 
 prix : String
}
  input UserInput {
    email: String!
    password: String!
    userName: String
    lastName: String
    date: String
    permission: String
  }
  input UserrInput {
    email: String
    userName: String
    lastName: String
    date: String
    permission: String
  }
  

  type UserLogged {
    token: String
    email: String!
    userName: String
    lastName: String
    date: String
    password: String
    permission: String

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

  type Query {

    users: [User]
    user(id:ID!): User
    me: UserLogged
    news : [News]
  }
  type Mutation {
    addNews(input: NewsInput): News
    removeNews(id: ID!,): Boolean
    register(input: UserInput): UserLogged
    login(input: UserInput): UserLogged
    addUser(input: UserrInput ): User
    updateUser(input: UserrInput): User
    removeUser(id: ID!): Boolean
  }

`;

// resolvers

const resolvers = {
  Query: {
    users: async (_, $, { models }) => {
      const user = await models.User.find();
      await setTimeout(() => {
      }, 7000);
      return user;
    },
    me: (_, $, { models, userId }) => models.User.findOne({ _id: userId }),

    user: (_, { id }, { models }) => models.User.findOne({ _id: id }),
    news : async (_, $, {models}) => {
      const article = await models.News.find();
    return article;
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
        email: input.email,
        password: hashPassword,
        userName: input.userName,
        lastName: input.lastName,
        date: input.date,
      });
      await user.save();
      const token = generateToken(user.id, user.email);
      return { token, email: user.email, userName: user.userName, lastName: user.lastName, date: user.date };
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
      return { token, email: currentUser.email, permission: currentUser.permission };
    },

    addUser: async (_, { input }, { models }) => {
      const newUser = new models.User({
        email: input.email,
        userName: input.userName,
        lastName: input.lastName,
        date: input.date,
      });
      const UserAdded = await newUser.save();
      // console.log('UserAdded', UserAdded);
      return UserAdded;
    },

    updateUser: async (_, {input}) => {
      const { email } = input;
      const updateUser = await User.findOneAndUpdate({ email }, { $set: input }, {new: true});
      return updateUser;
    },

    
    removeUser: async (_, { id }) => {
      await User.findByIdAndRemove(id);
      return true;
    },


  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
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
        News
      },
    };
  },
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
mongoose.connect('mongodb://localhost:27017/training', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to mongodb');
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  });
