const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://Rohit1234:Rohit@cluster0.lvw3673.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
