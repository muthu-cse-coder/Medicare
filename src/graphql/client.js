// import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// // HTTP connection to the API
// const httpLink = createHttpLink({
//   uri: 'http://localhost:8080/query', // Your GraphQL endpoint
// });

// // Middleware to add auth token to headers
// const authLink = setContext((_, { headers }) => {
//   // Get token from localStorage
//   const token = localStorage.getItem('authToken');
  
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   };
// });

// // Create Apollo Client
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: 'network-only',
//     },
//     query: {
//       fetchPolicy: 'network-only',
//     },
//   },
// });

// export default client;