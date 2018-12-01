import { mount } from '@vue/test-utils';
import MovieDetails from '../../src/views/MovieDetails';

const wrapper = mount(MovieDetails);

describe('ExploreMovieDetails', () => {
    it('Displays details of movie', () => {

        expect(wrapper.vm.$data.movie_text).toBe("Explore Movie Details");

        const data = wrapper.find('data');
        data.element.value = "Movies";
        data.trigger('data');

        expect(wrapper.vm.$data.movie_text).toBe("Movies");

        const data1 = wrapper.find('data');
        data1.element.value = "X-men:Dark Phoenix";
        data1.trigger('data');

        expect(wrapper.vm.$data.title).toBe("X-men:Dark Phoenix");

        expect(wrapper.vm.$data.release_date).toBe(" ");

        const data2 = wrapper.find('data');
        data2.element.value = "2019-06-08";
        data2.trigger('data');

        expect(wrapper.vm.$data.release_date).toBe("2019-06-08");
    })
});