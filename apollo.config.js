module.exports = {
  client: {
    service: {
      name: 'hasura',
      url: 'https://wellness-backend.hasura.app/v1/graphql',
      // headers: {
      //   'x-hasura-admin-secret': 'Bearer Woodbird966',
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
