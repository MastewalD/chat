const mongoose = require("mongoose")
const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    senderId:{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    receiverId:{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    }
},{ timestamps:true})

const Message = new mongoose.model("Message",messageSchema)
module.exports = Message