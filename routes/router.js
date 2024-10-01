const express = require('express');
const router = express.Router();
const News = require('../mongoose-models/news');


router.get('/news', async (req, res)  => {
	const news = await News.find()
	res.send(news)
});

router.post('/news', async (req, res)  => {
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


	// const news = await News.insertMany([
	// 	{
	// 		title: "Prioritizer Deployment",
	// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
	// 		date: new Date(),
	// 		author: "Paul Brogee"
	// 	},
	// 	{
	// 		title: "Matcher Deployment",
	// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
	// 		date: new Date(),
	// 		author: "Benjamin, Haibe-kains"
	// 	},
	// 	{
	// 		title: "CTIMS Update",
	// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
	// 		date: new Date(),
	// 		author: "Benjamin, Grant"
	// 	},
	// 	{
	// 		title: "Match Algorithm Update",
	// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
	// 		date: new Date(),
	// 		author: "Benjamin, Grant"
	// 	},
	// 	{
	// 		title: "New Collaborator Announcement",
	// 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
	// 		date: new Date(),
	// 		author: "Benjamin, Grant"
	// 	}
	// ])
	// res.send(`inserted ${news.length} documents into news collection`)
});

module.exports = router;