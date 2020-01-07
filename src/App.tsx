import React from 'react';
import './App.css';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

import Gallery from './components/Gallery';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://metaphysics-production.artsy.net/'
  })
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Gallery />
    </ApolloProvider>
  );
};

export default App;
