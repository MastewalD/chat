const mongoose = require("mongoose")

const chatRoomSchema = new mongoose.Schema({
    roomName:{
        type: String,
        required: true,
        trim: true
    },
    isGroup:{
        type: Boolean,
        required: true
    }
},{timestamps: true})

const ChatRoom = new mongoose.model("ChatRoom",chatRoomSchema)
module.exports = ChatRoom