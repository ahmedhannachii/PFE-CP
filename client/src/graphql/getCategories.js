import gql from 'graphql-tag';

const GET_CATEGORIES = gql`
{
  categories {
    id
    titre
  }
}
`;

export default GET_CATEGORIES;