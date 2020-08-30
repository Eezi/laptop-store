import mongoose from "mongoose";

const Schema = mongoose.Schema;

/*onst laptopSchema = new Schema({
    productName: String,
    image: String,
    cpu: String,
    ram: String,
    storage: String,
    screen: String,
    price: String,
    description: String,
    quantity: 
})*/

//export const laptop = mongoose.model("laptop", laptopSchema);

export const Lappari = mongoose.model("Lappari",
 {
    productName: String,
    image: String,
    cpu: String,
    ram: String,
    storage: String,
    screen: String,
    price: String,
    description: String,
    quantity: String
 });

 /*Lappari.findOneAndUpdate({price: "3199"}, {$set:{quantity: }}, {new: true}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
});*/

 export const Order = mongoose.model("Order",
 {
     productName: String,
     price: String,
     quantity: String
 } );