import gql from 'graphql-tag';

export const ADD_USER = gql`
mutation register($UserInput: UserInput){
  register(input: $UserInput){
  email
  password
  userName
  lastName
  date
}
}
`;
export const USER_UPDATE = gql`
mutation register($UserInput: UserInput){
  register(input: $UserInput){
    email
    password
    userName
    lastName
    date
}
}
`;

