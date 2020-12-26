import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client'
import { onError } from '@apollo/link-error'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'
import consola from 'consola'

const httpLink = createHttpLink({ uri: 'https://wellness-backend.hasura.app/v1/graphql' })

const wsLink = new WebSocketLink({
  uri: `wss://bbc.com`,
  options: {
    reconnect: true,
  },
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      consola.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    )
  }
  if (networkError) consola.error(`[Network error]: ${networkError}`)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(splitLink),
  connectToDevTools: true,
})

export default client
