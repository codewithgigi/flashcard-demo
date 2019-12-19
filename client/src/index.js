import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'

import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

//import { ApolloLink } from 'apollo-client-preset'
import App from './app/index'

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API,
})

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = ''

  //const authorizationHeader = token ? token : null
  operation.setContext({
    headers: {
      authorization: token,
    },
  })
  return forward(operation)
})

const client = new ApolloClient({
  link: middlewareAuthLink.concat(httpLink),
  //link: httpLink,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
