import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from 'react-router-dom';
import Routers from './router';


// import App from './App';



const onError = ({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
};




const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  clientState: {
    defaults: {
      isConnected: false
    },
    resolvers: {
      Mutation: {
        updateNetworkStatus: (_, { isConnected }, { cache }) => {
          cache.writeData({ data: { isConnected }});
          return null;
        }
      },
    },
  },
  request: (operation) => {
    const token = localStorage.getItem('jwToken');
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
 
  onError
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
    <Routers />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
