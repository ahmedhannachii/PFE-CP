import gql from 'graphql-tag';

export default gql`
query allusers{
  users {
  id
  email
  password
  userName
  lastName
  date
  permission
}
}
`;
