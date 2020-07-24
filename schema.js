const { gql } = require('apollo-server-express');
const cors = require('cors');
import { Lappari, Order } from "./Laptop";
import mongoose from 'mongoose';


export const typeDefs = gql`
    type Laptop {
        id: ID
        productName: String!
        image: String
        cpu: String
        ram: String
        storage: String
        screen: String
        price: String!
        description: String
    }

    type Order {
        id: ID
        productName: String!
        price: String!
    }

    type Query {
        laptopCount: Int!
        allLaptops: [Laptop!]!
        allOrders: [Order!]!
        findLaptop(productName: String!): Laptop
        laptops: [Laptop!]!
    }

    type Mutation {
        addOrder(
            productName: String!
            image: String
            cpu: String
            ram: String
            storage: String
            screen: String
            price: String!
            description: String 
        ): Laptop

        removeOrder(
            id: ID
            price: String!
            productName: String!
        ):Order
    }

    
       
    
`;

export const resolvers = {
    Query: {
        laptopCount: () => laptops.length,
        //allLaptops: () => laptops,
        allLaptops: () => Lappari.find(),
        allOrders: () => Order.find(),
        findLaptop: (root, args) => Lappari.findOne({ productName: args.productName }),
      
        
    },
    Mutation: {
        addOrder: async(_, { 
            productName,
            price
            
            
         }) => {
             const item = new Order({
                productName,
                price
                
             });
             await item.save();
             return item;
         },
       
        removeOrder: async(_, {
            id,
            productName,
            price
        }) => {
            return await Order.findOneAndRemove({
                id,
                productName,
                price
            });
        }
    }
}


