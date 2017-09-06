'use strict'

module.exports = function(app) {
	const homeMapper = require('../services/mappers/home-mapper');
	const homeHandler = require('../services/handlers/home-handler')(homeMapper);

	// Get home page
	app.get('/', homeHandler.get);
};
