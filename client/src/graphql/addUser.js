import gql from 'graphql-tag';

const ADD_USERR = gql`
mutation addUser($UserrInput: UserrInput){
  addUser(input: $UserrInput){
    email
    userName
    lastName
    date
    permission
}
}
`;
export default ADD_USERR;
