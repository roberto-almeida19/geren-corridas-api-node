const mongoose = require('mongoose')
const Driver = mongoose.model('Driver');
const Address = mongoose.model('Address');

module.exports = {
    async listAll(req,res) {
        const drivers = await Driver.getAll();
        return res.json(drivers);
    },
    async save(req,res) {



//        const address = await Address.create(req.body.endereco);
   //     const drivers = await Driver.create(req.body);
        return res.json(req.body.endereco);
    },
    async show(req,res) {
        const drivers = await Driver.findById(req.params.id);
        return res.json(drivers);
    },
    async update(req,res) {
        const drivers = await Driver.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(drivers);
    },
    async delete(req,res) {
        const drivers = await Driver.findByIdAndDelete(req.params.id);
        return res.send()
    },


    
 
    
};
