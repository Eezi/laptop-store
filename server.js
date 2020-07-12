import express from "express";
import mongoose from "mongoose";
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
    const url = 'mongodb+srv://tomi:nakki123@cluster0-q2yoo.mongodb.net/store?retryWrites=true&w=majority';

    try {

   // await mongoose.connect(url, { useNewUrlParser: true });

    }catch(error){
        console.log(error)
    }

    app.get('/', (req, res) => res.send('hello world'))

    app.listen({port: 4001}, ()=> {
        console.log('connected')
    })

}

server();