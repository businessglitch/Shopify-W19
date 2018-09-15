import React, { Component } from 'react';
import './TableComponent.css';

class TableComponent  extends Component {

	/* Function call to render the add button
		@input: id, repository id

		Renders button only if the repository is not present in the favourites respositories Array
  	*/

	render_Add(_id) {
		const repo = this.props.favRepos.find(function (obj) { return obj.id === _id; });

		if(repo !== undefined) {
			return ( <td></td>);
		} else {
			return (
				<td>
					<a className='cell-link--button' href='#' onClick={() => { 
					this.props.func(_id)}}>Add</a>
				</td>
			);
		}
  	}

  	render_Remove(_id) {
  		return (
  			<td>
  				<a className='cell-link--button' href='#' onClick={() => { 
				this.props.func(_id)}}>Remove</a>
			</td>
  		);
  	}

  	/* Function call to render buttons according to the type of the table
		@input: id, repository id
  	*/

  	render_Button(_id) {
  		const { type } = this.props.data;
  		if(type == 'FAV') {
  			return this.render_Remove(_id);
  		} else {
  			return this.render_Add(_id)
  		}
  	}

	render() {
		const dataColumns = this.props.data.columns;
		const dataRows = this.props.data.rows;
		const that = this;

		const tableHeaders = (
			<thead>
          		<tr>
		            {
		            	dataColumns.map(function(column, index) {
		              		return <th className='table-header' key={index}>{column}</th>; 
		          		})
		       		}
          		</tr>
      		</thead>
      	)
      
      	const tableBody = (
      		<tbody>
      			{
      				dataRows.map(function(row, index) {
      					const { id, full_name, html_url, tag } = row;
      					let language = row.language == null ? '-' : row.language;
	
		              	return (
	              			<tr key={id}>
	              				<td className='table-cell'><a className='cell-link--repo' target="_blank" href={html_url}>{full_name}</a></td>
								<td className='table-cell'>{language}</td>
								<td className='table-cell'>{tag}</td>
								{that.render_Button(id)}
							</tr>
						)
		          	})
      			}
      		</tbody>
      	)

		return (
			<div>
				<table className='table'>
					{tableHeaders}
					{tableBody}
				</table>	
			</div>
		);
	}
}

export default TableComponent;