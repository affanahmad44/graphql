import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store';
import { client } from './config/graphql/graphql_client';
 
 
 

 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>

   <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
 
  </ApolloProvider>
);
 