const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    newsItems: [{ 
		subtitle: String,
		description: String
	}],
	author: String,
    date: Date,
});

const News = mongoose.model('news', newsSchema);
module.exports = News;
