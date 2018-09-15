const express = require('express');
const router = express.Router();
const request = require('request');
const access_token  = '5802921c01c717ef534d7e26603019136d459d8b';

router.get('/getRepos', (req, res, next) => {
	
	fetchRepos(function(data) {
		res.json(data);
	});	
});


router.post('/getRepos', (req, res, next) => {
	const searchTerm = req.body.value;
	
	fetchRepos(searchTerm,function(data) {
		res.json(data);
	});
		
});

// q = Keyword 
// per-page = limit of how many items
const fetchRepos = (value, callback) => {
	const url = `https://api.github.com/search/repositories?q=${value}&per_page=10&access_token=${access_token}`;
	const options = {
		json: true, headers: { 'User-Agent': 'node.js' }
	}

	request(url,options, (err, res, body) => {
			if(err) {
				return callback(err);
			}

			return callback(body);
	});
}

module.exports = router;