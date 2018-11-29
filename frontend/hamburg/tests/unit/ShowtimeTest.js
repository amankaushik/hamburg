import { mount } from '@vue/test-utils';
import showtimesView from '../../src/views/ShowtimesView';

const wrapper = mount(showtimesView);

describe('showtimesView', () => {
    it('Displays venom', () => {

        expect(wrapper.vm.$data.cinemas).toBe('');

        const input = wrapper.find('input');
        input.element.value = 'venom';
        input.trigger('input');

        expect(wrapper.vm.$data.cinemas).toBe('venom');
    })
});