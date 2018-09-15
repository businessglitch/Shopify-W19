import React, { Component } from 'react';
import TableComponent from '../TableComponent/TableComponent';
import './favourites-list.css';

const  TableData  = require('../utils/utils').TableData;

class FavouritesList  extends Component {

	render() {
		const columns = ['Name', 'Language', 'Latest tag']
		const tableData = new TableData(columns, this.props.data, 'FAV')

		return (
			<div id='favourites-section-body'>
				<TableComponent 
					func={this.props.handleRemove} 
					data={tableData}
				/>
			</div>
		);
	}
}

export default FavouritesList;