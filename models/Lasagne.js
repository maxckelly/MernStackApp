const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lasagneSchema = new Schema({
  name: String, 
  location: String, 
  price: String
}, { 
  timestamps: true
});

const Lasagne = mongoose.model('Lasagne', lasagneSchema);

module.export = Lasagne;