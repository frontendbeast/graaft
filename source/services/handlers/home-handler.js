'use strict'

const homeMapper = require('../mappers/home-mapper');
const homeWrapper = require('../wrappers/home-wrapper');

const HomeHandler = function(homeMapper) {

	return {
		get: function(request, response, next) {
			homeWrapper.getItem()
				.then((item) => {
					return homeMapper.mapItem(item);
				})
				.then(model => {
					return response.render('home', model);
				}).catch(next);
		}
	};

}

module.exports = HomeHandler;
