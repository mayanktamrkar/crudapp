import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({
    name:{type:String},
    desc:{type:String},
    city:{type:Number}
})


const crudModel = mongoose.model("crud",crudSchema)

export { crudModel } ;