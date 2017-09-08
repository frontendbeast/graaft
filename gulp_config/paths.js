'use strict';

function getPaths(config) {
	var path = require('path');

	var dirs = {
		"dest": "public",
		"css": "styles",
		"images": "images",
		"partials": "partials",
		"root": "./source",
		"sass": "sass",
		"src": "_public",
		"tasks": "gulp_tasks",
		"views": "views"
	};

	var base = {
		dest: path.join(dirs.root, dirs.dest),
		src: path.join(dirs.root, dirs.src)
	};

	var paths = {
		"clean": [base.dest],
		"dest": {
		  "images": path.join(base.dest, dirs.images),
			"partials": path.join(dirs.root, dirs.views, dirs.partials, 'inline'),
			"root": base.dest,
			"css": path.join(base.dest, dirs.css)
		},
		"src": {
		  "images": path.join(base.src, dirs.images),
			"partials": path.join(base.src, dirs.partials),
			"root": base.src,
			"sass": path.join(base.src, dirs.sass),
			"views": path.join(dirs.root, dirs.views)
		},
		"tasks": path.join(dirs.tasks)
	};

	return paths;
}

module.exports = getPaths;
