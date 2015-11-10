var mongoose = require('mongoose');

module.exports = mongoose.model('Task', new mongoose.Schema({
    name: String
}));