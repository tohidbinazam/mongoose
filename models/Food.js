import mongoose from "mongoose";


const foodSchema = mongoose.Schema({
    name:{
        type: String,
        required : [ true, 'Name fields is required' ]
    },
    price:{
        type: Number,
        required:[ true, 'Food price is required']
    },
    retting:{
        type: Number,
        required:[ true, 'Food retting is required']
    }
    
},{ timestamps: true })

// Export user schema
export default mongoose.model('Food', foodSchema)