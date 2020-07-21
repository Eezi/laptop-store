import mongoose from "mongoose";

const Schema = mongoose.Schema;

const laptopSchema = new Schema({
    productName: String,
    image: String,
    cpu: String,
    ram: String,
    storage: String,
    screen: String,
    price: String,
    description: String
})
export const Lappari = mongoose.model("Lappari",
 {
    productName: String,
    image: String,
    cpu: String,
    ram: String,
    storage: String,
    screen: String,
    price: String,
    description: String 
 });

 export const Order = mongoose.model("Order",
 {
     productName: String,
     price: String
 } );