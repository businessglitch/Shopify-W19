
class TableData {

	constructor(columns, data, type) {
		this.columns = columns;
		this.rows = data;
		this.type = type;
	}
};

module.exports = {
	TableData: TableData
};