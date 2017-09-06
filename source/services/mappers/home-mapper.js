'use strict';

const md = require('marked');

const HomeMapper = function() {

	function mapFields(data) {

		const fields = data.fields;

		let model = {};

		model.title = fields.title;
		model.intro = md(fields.intro);
		model.skills1 = md(fields.skills1);
		model.skills2 = md(fields.skills2);
		model.additional = md(fields.additional);

		return model;
	}

	return {
		mapItem: function(item) {
			return mapFields(item);
		}
	};
};

module.exports = new HomeMapper();
