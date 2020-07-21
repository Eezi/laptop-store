const { gql } = require('apollo-server-express');
const cors = require('cors');
import { Lappari, Order } from "./Laptop";
import mongoose from 'mongoose';


export const typeDefs = gql`
    type Laptop {
        id: ID!
        productName: String!
        image: String!
        cpu: String!
        ram: String!
        storage: String!
        screen: String!
        price: String!
        description: String!
    }

    type Query {
        laptopCount: Int!
        allLaptops: [Laptop!]!
        findLaptop(productName: String!): Laptop
        laptops: [Laptop!]!
    }

    type Mutation {
        addLaptop(
            productName: String!
            image: String
            cpu: String
            ram: String
            storage: String
            screen: String
            price: String!
            description: String 
        ): Laptop
    }
`;

export const resolvers = {
    Query: {
        laptopCount: () => laptops.length,
        //allLaptops: () => laptops,
        allLaptops: () => Lappari.find(),
        findLaptop: (root, args) => Lappari.findOne({ productName: args.productName })
        
    },
    Mutation: {
        addLaptop: async(_, { 
            productName,
            price,
            
         }) => {
             const item = new Order({
                productName,
                price,
             });
             await item.save();
             return item;
         }
    }
}


