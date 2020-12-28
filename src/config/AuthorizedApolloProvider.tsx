import React, { useState, useEffect, ReactNode } from 'react'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'

import { useAuth0 } from '@auth0/auth0-react'

interface AuthorizedApolloProviderProps {
  children: ReactNode
}

const AuthorizedApolloProvider: React.FC<AuthorizedApolloProviderProps> = ({
  children,
}: AuthorizedApolloProviderProps) => {
  const [tokenState, setToken] = useState<string | null>(null)
  const { isAuthenticated, getAccessTokenSilently, isLoading, loginWithRedirect } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => setToken(token))
    } else if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    }
  }, [isAuthenticated, isLoading])

  if (isLoading || (!isLoading && !isAuthenticated)) return <div>Loading</div>
  const httpLink = createHttpLink({ uri: 'https://wellness-backend.hasura.app/v1/graphql' })

  const wsLink = new WebSocketLink({
    uri: `wss://wellness-backend.hasura.app/v1/graphql`,
    options: {
      reconnect: true,
      connectionParams: {
        ...(isAuthenticated && {
          headers: {
            Authorization: `Bearer ${tokenState}`,
          },
        }),
      },
    },
  })

  const authLink = setContext(async () => {
    return {
      ...(isAuthenticated && {
        headers: {
          Authorization: `Bearer ${tokenState}`,
        },
      }),
    }
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    authLink.concat(httpLink),
  )

  const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default AuthorizedApolloProvider
