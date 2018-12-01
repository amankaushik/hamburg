import { mount } from '@vue/test-utils';
import showtimesView from '../../src/views/ShowtimesView';

const wrapper = mount(showtimesView);

describe('showtimesView', () => {
    it('Displays Fault in ou stars', () => {

        expect(wrapper.vm.$data.cinemas).toBe('');

        const data1 = wrapper.find('data1');
        data1.element.value = 'Fault in ou stars';
        data1.trigger('data1');

        expect(wrapper.vm.$data.cinemas).toBe('Fault in ou stars');
    })
});