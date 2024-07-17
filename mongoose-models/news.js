const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    description: String,
    date: Date,
	author: String,
});

const News = mongoose.model('news', newsSchema);
module.exports = News;
