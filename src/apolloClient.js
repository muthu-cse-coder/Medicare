
// // import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
// // import { setContext } from "@apollo/client/link/context";

// // const httpLink = new HttpLink({
// //   uri: "http://localhost:8080/query",
// // });

// // const authLink = setContext((_, { headers }) => {
// //   const token = localStorage.getItem("token");

// //   return {
// //     headers: {
// //       ...headers,
// //       authorization: token ? `Bearer ${token}` : "",
// //     },
// //   };
// // });

// // const client = new ApolloClient({
// //   link: from([authLink, httpLink]),
// //   cache: new InMemoryCache(),
// // });

// // export default client;
// // import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
// // import { setContext } from "@apollo/client/link/context";

// // const httpLink = new HttpLink({
// //   uri: "http://localhost:8080/query",
// // });

// // const authLink = setContext((_, { headers }) => {
// //   const token = localStorage.getItem("token");

// //   // ONLY send token if it exists and not empty
// //   return {
// //     headers: {
// //       ...headers,
// //       authorization: token ? `Bearer ${token}` : "",
// //     },
// //   };
// // });

// // const client = new ApolloClient({
// //   link: from([authLink, httpLink]),
// //   cache: new InMemoryCache(),
// // });

// // export default client;
// import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// const httpLink = new HttpLink({
//   uri: "http://localhost:8080/query",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("token");

//   return {
//     headers: {
//       ...headers,
//       // DO NOT send Authorization if token is not available
//       ...(token ? { authorization: `Bearer ${token}` } : {}),
//     },
//   };
// });

// const client = new ApolloClient({
//   link: from([authLink, httpLink]),
//   cache: new InMemoryCache(),
// });

// export default client;
// apolloPublic.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const publicClient = new ApolloClient({
  link: new HttpLink({
    // uri: "http://localhost:8080/query",
    uri:"https://medicare-backend-o89x.onrender.com/query",
  }),
  cache: new InMemoryCache(),
});

export default publicClient;
