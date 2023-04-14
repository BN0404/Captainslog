const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    name: { type: String, required: true },
    entry: { type: String, required: true },
     
    shipIsBroken: {
        type: Boolean,    
    }   
},

{ timestamps: true }
);


const Logs = mongoose.model('Logs', logSchema);

module.exports = Logs;