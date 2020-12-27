import React from 'react'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'

import { useAuth0 } from '@auth0/auth0-react'

const AuthorizedApolloProvider = ({ children }: any) => {
  const { getAccessTokenSilently } = useAuth0()

  const httpLink = createHttpLink({ uri: 'https://wellness-backend.hasura.app/v1/graphql' })

  const wsLink = new WebSocketLink({
    uri: `wss://wellness-backend.hasura.app/v1/graphql`,
    options: {
      reconnect: true,
    },
  })

  //   const splitLink = split(
  //     ({ query }) => {
  //       const definition = getMainDefinition(query)
  //       return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  //     },
  //     wsLink,
  //     httpLink,
  //   )

  const authLink = setContext(async () => {
    const token = await getAccessTokenSilently()
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default AuthorizedApolloProvider
