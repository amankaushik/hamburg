import { mount } from '@vue/test-utils';
import Home from '../../src/views/Home';

const wrapper = mount(Home);

describe('Home', () => {
    it('Displays Home', () => {

        expect(wrapper.vm.$data.name).toBe("Home");

        const input = wrapper.find('input');
        input.element.value = "welcome";
        input.trigger('input');

        expect(wrapper.vm.$data.name).toBe("welcome");
    })
});