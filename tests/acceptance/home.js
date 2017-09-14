'use strict';

process.env.NODE_ENV = 'test';
process.env.PORT = 5000;

const http = require('http');
const path = require('path');

const app = require(path.join('..', '..', 'source', 'server'));
const Browser = require('zombie');
const nock = require('nock');

Browser.localhost('darrenhall.co', process.env.PORT);

const webfont = nock('https://ajax.googleapis.com').get('/ajax/libs/webfont/1.6.26/webfont.js').replyWithFile(200, __dirname + '/../mocks/webfont.js');
const analytics = nock('https://www.google-analytics.com').get('/analytics.js').reply(200);

describe('When a user visits the home page', function () {

    before(function() {
        this.server = http.createServer(app).listen(process.env.PORT);
        this.browser = new Browser();
    });

    beforeEach(function(done) {
        this.browser.visit('/', done);
    });

    it('should display an svg', function () {
        this.browser.assert.elements('svg', { atLeast: 1 });
    });

    after(function(done) {
        this.server.close(done);
    });
});
