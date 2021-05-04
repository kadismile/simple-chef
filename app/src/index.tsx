import * as React from "react";
import {ApolloProvider} from "react-apollo"
import {render} from "react-dom"
import {createGlobalStyle} from "styled-components";

import graphqlClient from "./api/graphql"
import Root from "./components/Root"
const GLobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  body {
    font-family: Roboto, san-serif
  }
`;

render(
  <ApolloProvider client={graphqlClient}>
    <GLobalStyles />
    <Root/>
  </ApolloProvider>,
  document.getElementById("app")
)