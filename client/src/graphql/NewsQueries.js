import gql from 'graphql-tag';

export default gql`
query news{
 news{
 id
 titre 
 description
 image 
 prix
}
}
`;

