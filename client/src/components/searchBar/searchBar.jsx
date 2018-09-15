import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		const value = event.target.value

		if( value == '' ) {
			this.props.clearRepos();
		} 

		this.setState({value});
	}

	handleSubmit(event) {
		event.preventDefault();
    	this.props.getValue(this.state.value);  	
  	}

	render() {
		return (
			<div> 
				<form onSubmit={this.handleSubmit}>		
          			<input className='input' type="text" value={this.state.value} onChange={this.handleChange} />
        			<input className='button' type="submit" value="Submit" />
      			</form>
			</div>
		);
	}
}

export default SearchBar;