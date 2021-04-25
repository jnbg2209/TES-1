import mongoose, { Schema } from "mongoose";

const Category = new Schema({
    // _id: {type: String},
    name: {type: String, required: true},
    minIncome: {type: Number, required: true},
    transactionLimit: {type: Number, required: true},
    transactionTax: {type: Number, required: true},
});

export default mongoose.model("Category", Category);