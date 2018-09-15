import React, { Component } from 'react';
import Repositories from './repositories/repositories';
import SearchBar from './searchBar/searchBar';
import FavouritesList from './favourites-list/favourites-list';
import Header from './header/header';
import './App.css';

const fetchRepos = require('./data-services/data-services').fetchRepos;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			repositories: [],
			favourite_repositories: []
		}

		this.getSearchValue = this.getSearchValue.bind(this);
		this.addToFavourites = this.addToFavourites.bind(this);
		this.removeFromFavourites = this.removeFromFavourites.bind(this);
		this.clearRepos = this.clearRepos.bind(this);
	}

	getSearchValue(_search_term) {	
		const that = this;

		fetchRepos(_search_term, function(repositories) {
			that.setState({repositories});
		});
	}

	/* Function call to add repository to favourites 
		@input _id: repository id

		Finds repository in the repositories Array associated to the id and adds it to favourites_array

	*/

	addToFavourites(_id) {
		const repo = this.state.repositories.find(function (repo) { return repo.id === _id; });

		this.setState (prevState => ({ favourite_repositories: [...prevState.favourite_repositories, repo ]}));
	}

	/* Function call to remove repository from favourites 
		@input _id: repository id

		Filters the favourites array to return all repositories except the repository associated with the id
	*/

	removeFromFavourites(_id) {
		const result = this.state.favourite_repositories.filter(repo => repo.id != _id);

		this.setState({favourite_repositories: result});
	}

	/* Function call to empty the repository Array 
		@input _id: repository id

	*/
	
	clearRepos() {
		this.setState({repositories: []})
	}

	render() {
		return (
			<div> 
				<Header />
				<div id="body-section">
					<div id="repositories-section">
						<SearchBar 
							getValue={this.getSearchValue} 
							clearRepos={this.clearRepos}
						/>

						<Repositories 
							data={this.state.repositories} 
							favRepos={this.state.favourite_repositories} 
							handleAdd={this.addToFavourites} 
						/>
					</div>
					<div id="favourites-section">
						<FavouritesList 
							data={this.state.favourite_repositories} 
							handleRemove={this.removeFromFavourites}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;