import { mount } from '@vue/test-utils';
import Home from '../../src/views/About';

const wrapper = mount(Home);

describe('About', () => {
    it('Display About', () => {

        expect(wrapper.vm.$data.name).toBe("About");

        const input = wrapper.find('input');
        input.element.value = "About Movie";
        expect(wrapper.vm.$data.showtime_text).toBe("Movies");

        expect(wrapper.vm.$data.name).toBe("About Movie");
    })
});