const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model(
    'User',
    new Schema({
      phone: { type: String, required: true },
    })
);

module.exports = User;