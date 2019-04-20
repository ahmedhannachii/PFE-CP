import gql from 'graphql-tag';



const GET_USERR_BY_ID = gql`

  query user($id: ID!) {

    user(id: $id) {

      email
      password
      userName
      lastName
      date
      permission
}

    }

  

`;

export default GET_USERR_BY_ID;