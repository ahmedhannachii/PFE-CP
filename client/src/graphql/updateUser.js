import gql from 'graphql-tag';

const UPDATE_USERR = gql`
mutation UpdateUser($Input: UserUpdateInput){
  updateUser(input: $Input) {
    id
    email
    userName
    lastName
    date
    permission
}
}
`;
export default UPDATE_USERR;

