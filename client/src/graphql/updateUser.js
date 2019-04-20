import gql from 'graphql-tag';

const UPDATE_USERR = gql`
mutation updateUser($UserrInput: UserrInput){
  updateUser(input: $UserrInput){
    email
    userName
    lastName
    date
    permission
}
}
`;
export default UPDATE_USERR;

