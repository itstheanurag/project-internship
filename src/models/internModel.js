const mongoose = require ("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    mobile : {
       type : Number,
       match:  /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
       required : true,
       unique : true
    },
    collegeId : {
        type : objectId,
        ref : 'College',
        required : true,
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
})

module.exports = new mongoose.model("intern", internSchema)