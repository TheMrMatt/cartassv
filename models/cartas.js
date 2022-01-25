const mongoose = require('mongoose');


const CartasSchema = new mongoose.Schema({
    pregunta: {
        type: String,
        trim: true,
        require: [true, 'Please add some text']
    }
});

module.exports = mongoose.model('Cartas', CartasSchema);