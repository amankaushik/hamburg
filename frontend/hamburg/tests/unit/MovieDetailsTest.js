import { mount } from '@vue/test-utils';
import MovieDetails from '../../src/views/MovieDetails';

const wrapper = mount(MovieDetails);

describe('MovieDetails', () => {
    it('Displays details of movie', () => {

        expect(wrapper.vm.$data.showtime_text).toBe("View Showtimes");

        const input = wrapper.find('input');
        input.element.value = "Showtimes";
        input.trigger('input');

        expect(wrapper.vm.$data.showtime_text).toBe("Showtimes");

        expect(wrapper.vm.$data.title).toBe("");

        const input1 = wrapper.find('input');
        input1.element.value = "Aquaman";
        input1.trigger('input');

        expect(wrapper.vm.$data.title).toBe("Aquaman");

        expect(wrapper.vm.$data.release_date).toBe(" ");

        const input2 = wrapper.find('input');
        input2.element.value = "2018-12-12";
        input2.trigger('input');

        expect(wrapper.vm.$data.release_date).toBe("2018-12-12");
    })
});