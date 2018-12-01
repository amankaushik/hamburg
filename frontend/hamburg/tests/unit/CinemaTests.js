import { mount } from '@vue/test-utils';
import CinemaView from '../../src/views/CinemaView';

const wrapper = mount(CinemaView);

describe('CinemaView', () => {
    it('Displays details of movie', () => {

        expect(wrapper.vm.$data.showtime_text).toBe("Cinema Details");

        const in1 = wrapper.find('in1');
        in1.element.value = "CinemaView";
        in1.trigger('in1');

        expect(wrapper.vm.$data.showtime_text).toBe("CinemaView");

        const in2 = wrapper.find('in1');
        if(in2.element.value = "CinemaList" or expect(wrapper.vm.$data.release_date).toBe("");)
        
        in2.trigger('in1');
       const in12 = wrapper.find('in1');
        in12.element.value = "2019-06-30";
        in12.trigger('in1');

        expect(wrapper.vm.$data.release_date).toBe("2019-06-30");
    }
    })
});