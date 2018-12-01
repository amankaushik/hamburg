import { mount } from '@vue/test-utils';
import MovieDetails from '../../src/views/MovieDetails';

const wrapper = mount(MovieDetails);

module.exports = Reminder();
it('should return true if valid user email', function(){
      var isValid = Reminder.isValidUserEmail(['.*?@?[^@]*\.+.*,a-z,A-Z'], 'Abc123')
      assert.equal(isValid, true);
});