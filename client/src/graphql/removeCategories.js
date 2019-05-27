import gql from 'graphql-tag';

const REMOVE_CATEGORIES = gql`
mutation removeCategories($id: ID!) {
  removeCategories(id: $id)
}`;

export default REMOVE_CATEGORIES;