const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT).then(() => { console.log('DB Connected') }).catch((error) => { console.log('Error: connecting to MongoDB ', error) });
}

module.exports = connectToDb;