const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://yshukla2775:yashshukla@cluster0.b86foqt.mongodb.net/';

async function connectToMongo() {
  await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}
  
module.exports = connectToMongo;