const { gql, UserInputError } = require('apollo-server-express');
const cors = require('cors');
import { Lappari, Order } from "./Laptop";
import mongoose from 'mongoose';


export const typeDefs = gql`
    type Laptop {
        id: ID
        productName: String
        image: String
        cpu: String
        ram: String
        storage: String
        screen: String
        price: String!
        description: String
        quantity: Int
    }

    type Order {
        id: ID
        productName: String!
        price: String!
        quantity: Int
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
            quantity: Int
        ): Laptop

        removeOrder(
            id: ID
            price: String!
            productName: String!
            quantity: Int

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
            price, 
            quantity
            
         }) => {
             const item = new Order({
                productName,
                price,
                quantity
             });
             await item.save();
             return item;
         },

         addQuantity: async(_, {
             quantity
         }) => {
            const doc = await Order.findOneAndUpdate({
                id: painettuID
            }, { $set: quantity + 1 }, { upsert: true });

             await plusQuantity.save();
             return plusQuantity;
         },

        removeOrder: async(_, {
            id,
            productName,
            price,
            quantity
        }) => {
            return await Order.findOneAndRemove({
                id,
                productName,
                price,
                quantity
            });
        }
    }
}


