const Lasagne = require('./../models/Lasagne');


const index = async (req, res) => {
  const lasagnes = await Lasagne.find()
  res.send(lasagnes)
};

const create = async (req, res) => {
  const { name, location, price } = req.body;
  const newLasagne = new Lasagne({
    name,
    location,
    price
  })
  const saveLasagne = await newLasagne.save()
  res.send(saveLasagne);
};

// Below exports
module.exports = {
  index, 
  create
}