import gql from 'graphql-tag';

const DELETE_USERR = gql `
mutation removeUser($id : ID!){
  removeUser(id : $id)
}


`;
export default DELETE_USERR;