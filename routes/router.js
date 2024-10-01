const express = require('express');
const router = express.Router();
const News = require('../mongoose-models/news');


router.get('/news', async (req, res)  => {
	const news = await News.find()
	res.send(news)
});

router.post('/news/add', async (req, res)  => {
	console.log(req.body);
	if (req.body.passcode == process.env.PASS){
		try {
			const news = await News.create(
				{
					title: req.body.title,
					newsItems: req.body.newsItems,
					author: req.body.author,
					date: req.body.date === '' || req.body.date === null ? new Date() : new Date(req.body.date)
				}
			)
			res.status(200).send(`Successfully inserted news article under the title "${req.body.title}"`);
		} catch (error) {
			res.status(400).send(`Could not insert news article due to a error: ${error}`);
		}
	}
	else{
		res.status(401).send('Incorrect passcode, please retry again with the correct passcode');
	}
});

router.post('/news/delete', async (req, res)  => {
	console.log(req.body);
	if (req.body.passcode == process.env.PASS){
		try {
			const news = await News.deleteOne(
				{
					_id: req.body.id
				}
			)
			console.log(news)
			res.status(200).send(`Successfully delete news article with id ${req.body.id}. Refresh the page to get an updated list`);
		} catch (error) {
			res.status(400).send(`Could not delete news article: ${error}`);
		}
	}
	else{
		res.status(401).send('Incorrect passcode, please retry again with the correct passcode');
	}
});

module.exports = router;