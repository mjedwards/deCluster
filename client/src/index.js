import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { createHttpLink } from 'apollo-link-http';
import reportWebVitals from './reportWebVitals';
import './index.css'

const httpLink = createHttpLink({
  uri: 'http://localhost:5500'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
