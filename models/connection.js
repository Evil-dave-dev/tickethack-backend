const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:nC00MnYRj08odHsG@cluster0.uqqwllp.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
