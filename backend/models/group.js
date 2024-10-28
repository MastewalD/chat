const mongoose = require("mongoose")
const groupSchema = new mongoose.Schema({
    groupName:{
        type: String,
        required: true
    }
},{timestamps:true})

const Group = new mongoose.model("Group",groupSchema)
module.exports = Group