
import gql from 'graphql-tag';

const ADD_CATEGORIES = gql`
mutation addCategories($CategoriesInput: CategoriesInput) {
  addCategories(input: $CategoriesInput) {
    id
    titre
  }
}`;

export default ADD_CATEGORIES;


