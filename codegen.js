module.exports = {
  schema: [
    {
      'https://wellness-backend.hasura.app/v1/graphql': {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': 'Woodbird966',
        },
      },
    },
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
