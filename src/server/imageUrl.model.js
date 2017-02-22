var mongoose = require('mongoose');

var imageUrlSchema = mongoose.Schema({
    url: String
});

var ImageUrl = mongoose.model('ImageUrl', imageUrlSchema);

module.exports = ImageUrl;
