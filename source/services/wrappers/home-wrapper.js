'use strict'

const q = require('q');
const cf = require('../../services/cf');

const HomeWrapper = function() {

	function getItem() {
		const deferred = q.defer();

		cf.api
			.getEntry('639QjkBShykwUmcO0uI8cg')
			.then(function(data) {
				if (data.sys.type === 'Error') {
					deferred.reject(data.sys.message);
				} else {
					deferred.resolve(data);
				}
			});

		return deferred.promise;
	}

	return {
		getItem: function() {
			return getItem();
		}
	};

}

module.exports = new HomeWrapper;
