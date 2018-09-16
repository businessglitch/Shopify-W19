import React from 'react';

/* Function call to grab repositories 
	@input: search_term, callback function
*/

const fetchRepos = (search_term, callback)  => {
	let clean_repositories = [];

	const options  = {
		headers: {
            "Content-Type": "application/json; charset=utf-8"
		},
		method: "POST",
		body: JSON.stringify({value: search_term})
	}

	fetch('/api/getRepos', options)
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