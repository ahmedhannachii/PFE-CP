import gql from 'graphql-tag'; 

export const ADD_NEWS = gql`
mutation addNews($NewsInput: NewsInput){
  addNews(input: $NewsInput){
    titre
    description 
    image  
    prix 
}
}
`;

const DELETE_NEWS = gql `
mutation removeNews($id : ID!){
  removeNews(id : $id)
}


`;
export default DELETE_NEWS;