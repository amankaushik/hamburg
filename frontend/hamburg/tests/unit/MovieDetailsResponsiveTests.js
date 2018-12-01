import { mount } from '@vue/test-utils';
import showtimesView from '../../src/views/ShowtimesView';

const wrapper = mount(showtimesView);
var status = require('http-status');
var users = require('./users');

var createServer = function(port) {
  var app = express();

  app.get('/movies/moviedetails', function(req, res) {
    if (users.list.indexOf(req.params.user) === -1) {
      return res.status(status.NOT_FOUND).
        json({ error: 'Not Found' });
    }
    res.json({ user: req.params.user });
  });

  return app.listen(port);
};

module.exports = createServer;
describe('showtimesView', () => {
    it('Displays +movie+', () => {

        expect(wrapper.vm.$data.moviedetails).toBe('');

        const data = wrapper.find('data');
        data.element.value = '+movie+';
        data.trigger('data');

        expect(wrapper.vm.$data.cinemas).toBe('+movie+');
    })
});