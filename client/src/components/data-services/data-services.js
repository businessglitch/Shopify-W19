import React from 'react';

const access_token  = '5802921c01c717ef534d7e26603019136d459d8b';

/* Function call to grab repositories 
	@input: search_term, callback function
*/

const fetchRepos = (search_term, callback)  => {
	const url = `https://api.github.com/search/repositories?q=${search_term}&per_page=10&access_token=${access_token}`;
	let clean_repositories = [];

	fetch(url)
	.then( res => res.json() )
	.then( repositories => {
		 clean_repositories = repositories.items;

		for (let i = 0; i < clean_repositories.length; i++) {
			fetchTag( clean_repositories[i], function(tag) {
				 clean_repositories[i].tag = tag;
			});
		}
	})
	.then(() => {
		setTimeout(function(){ callback(clean_repositories); }, 500);
	});
};

/* Function call to grab tags 
	@input: repository, callback function
*/

const fetchTag = (repo,callback) => {
	const { tags_url } = repo;

	fetch(tags_url)
	.then( res => res.json() )
	.then( tags => {
		const tagName = tags.length == 0 ? '-' : tags[0].name;

		callback(tagName);	
	});
}



module.exports = {
	fetchRepos: fetchRepos
};