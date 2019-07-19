const mongoose = require('mongoose'),
Schema = mongoose.Schema

const DriverSchema = new mongoose.Schema({
	name:{
        type:String,
        required:true
    },
    photoUrl:{
        type:String,
        required:true
    },
    address:{ type: Schema.Types.ObjectId, ref: 'Address' },
  //  cars:[{type:Schema.Types.ObjectId, ref:'Car'}],
   // runs:[{type:Schema.Types.ObjectId, ref:'Runs'}],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('Driver', DriverSchema);