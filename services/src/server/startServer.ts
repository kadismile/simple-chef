import {ApolloServer} from "apollo-server-express";
import * as cors from "cors"
import * as express from "express"

import resolvers from "../graphQl/resolvers"
import typeDefs from "../graphQl/typeDefs"
import accessEnv from "../helpers/accessEnv";

const PORT = accessEnv("PORT", 7000)

const apoloServer = new ApolloServer({resolvers, typeDefs})
const app = express()
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired"
    ],
    optionsSuccessStatus: 200
  })
)

apoloServer.applyMiddleware({app, path: "/graphql"})

app.listen(PORT, "0.0.0.0", ()=> {
  console.info(`GSD service listening on ${PORT}`)
})