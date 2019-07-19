const mongoose = require('mongoose'),
Schema = mongoose.Schema

const AddressSchema = new mongoose.Schema({
   
	logradouro:{
        type:String,
        required:true
    },
    numero:{
        type:Number,
        required:true
    },
    cep:{
        type:Number,
        required:true
    },
    cidade:{
        type: String,
         required:true
    },
    estado:{
        type: String,
         required:true
    },
    pais:{
        type: String,
         required:true
    }
});

mongoose.model('Address', AddressSchema);