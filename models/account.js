const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Balance:[
        {
            year:{type:String,required:true},
            Balance:{type:Number,required:true}
        },
        // {
        //     year:{type:String,required:true},
        //     Balance:{type:Number,required:true}
        // },
        // {
        //     year:{type:String,required:true},
        //     Balance:{type:Number,required:true}
        // },
    ]
})

module.exports.Accounts = mongoose.model('Accounts',accountSchema)