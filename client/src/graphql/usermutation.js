import gql from 'graphql-tag';

export const ADD_USER = gql`
mutation register($UserInput: UserInput){
  register(input: $UserInput){
  token
  user {
    email
    userName
    lastName
    date
    permission
  }
}
}
`;
export const USER_UPDATE = gql`
mutation UpdateUser($input: UserUpdateInput){
  updateUser(input: $input){
    email
    userName
    lastName
    date
}
}
`;

