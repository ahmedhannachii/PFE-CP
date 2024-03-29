import gql from 'graphql-tag';

export default gql `
query me{
  me {
    id
    email
    userName
    lastName
    date
  }
}
`;


export const GET_USERR = gql`
query getUser($empID: ID!){
  user(id: $empID){
    email
    password
    userName
    lastName
    date
    permission
}
}

`;

export const USER_INFO = gql`
query allusers($UserInput: UserInput){
  users(input: $UserInput){
    email
    userName
    lastName
    date
    permission
}
}
`;