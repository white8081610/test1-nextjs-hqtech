import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.escuelajs.co/graphql", // Замените на ваш GraphQL endpoint
});

const authLink = setContext((_, { headers }) => {
  // Получаем токен из localStorage
  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";
  // Возвращаем контекст с заголовками
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export function makeClient() {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}