module.exports = {
  client: {
    service: {
      name: 'hasura',
      url: 'https://wellness-backend.hasura.app/v1/graphql',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': 'Woodbird966',
      },
      // headers: {
      //   'x-hasura-graphql-admin-secret': 'Bearer Woodbird966',
      // },
      // optional headers
      //   headers: {
      //     authorization: 'Bearer lkjfalkfjadkfjeopknavadf',
      //   },
      // optional disable SSL validation check
      //skipSSLValidation: true,
    },
  },
}
