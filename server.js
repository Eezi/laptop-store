import express from "express";
import mongoose from "mongoose";
require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server-express');
import {resolvers} from "./schema";
const cors = require('cors');
import { typeDefs } from "./schema";




const server = async () => {
    const app = express();
    app.use(cors());
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

   
    
    server.applyMiddleware({app});
    const url = process.env.MONGODB_URI;

    try {

        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to database') )

    }catch(err){
        console.log(err)
    }

    app.get('/', (req, res) => res.send('hello world'))

    app.listen({port: 4000}, ()=> {
        console.log('connected')
    })

}

server();