import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const endpoint1 = new HttpLink({
  uri: "https://optimum-turtle-56.hasura.app/v1/graphql",
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_KEY as string,
  },
});

const endpoint2 = new HttpLink({
  uri: "https://api.casperstats.io/graphql",
  headers: {
    "content-type": "application/json",
  },
});

const client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "stats",
    endpoint2, //if above
    endpoint1
  ),
  cache: new InMemoryCache(),
});

export default client;
