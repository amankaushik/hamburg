import { mount } from '@vue/test-utils';
import MovieDetails from '../../src/views/MovieDetails';

const wrapper = mount(MovieDetails);
var assert = require('assert');
var server = require('../server');
var movies = require('../movies');
var status = require('http-status');

describe('/movies', movies() {
  var app;

  before(movies() {
    app = server(3000);
  });

  after(movies() {
    app.close();
  });

  it('returns corresponding details related to searched movie', function(done) {
    movies.list = ['test'];
    superagent.get('movie_api').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);
      var result = JSON.parse(res.text);
      assert.deepEqual({ movie: 'test' }, result);
      done();
    });
  });

  it('returns 404 if movies  `params.moviename` not found', function(done) {
    movies.list = ['test'];
    superagent.get('movie_api').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.NOT_FOUND);
      var result = JSON.parse(res.text);
      assert.deepEqual({ error: 'Not Found' }, result);
      done();
    });
  });
});