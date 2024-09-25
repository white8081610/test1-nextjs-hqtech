"use client";

import { ApolloProvider } from "@apollo/client";
import { makeClient } from "../lib/apolloClient";
import { ReactNode } from 'react';

export default function ApolloClientProvider({ children }: { children: ReactNode }): JSX.Element {
  return <ApolloProvider client={makeClient()}>{children}</ApolloProvider>;
}