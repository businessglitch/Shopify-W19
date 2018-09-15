import React, { Component } from 'react';
import TableComponent from '../TableComponent/TableComponent';
import './repositories.css';

const  TableData  = require('../utils/utils').TableData;

class Repositories extends Component {

	render() {
		const columns = ['Name', 'Language', 'Latest tag']
		const tableData = new TableData(columns, this.props.data, 'ADD')

		return (
			<div id='repositories-section-body'> 
				<TableComponent 
					data={tableData} 
					func={this.props.handleAdd} 
					favRepos={this.props.favRepos}
				/>
			</div>
		);
	}
}

export default Repositories;