import express from "express";
import mongoose from "mongoose";
require('dotenv').config()
import { ApolloServer, gql} from "apollo-server-express";
import {resolvers} from "./schema";
import { typeDefs } from "./schema";

const server = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    console.log(resolvers)
    server.applyMiddleware({app});
    const url = process.env.MONGODB_URI;

    try {

   await mongoose.connect(url, { useNewUrlParser: true }, () => console.log('connected to database') )

    }catch(err){
        console.log(err)
    }

    app.get('/', (req, res) => res.send('hello world'))

    app.listen({port: 4001}, ()=> {
        console.log('connected')
    })

}

server();