import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const leftHeroSlider = () => {
	new Swiper('.hero-slider__left', {
		modules: [Pagination, Autoplay],

		loop: true,

		// autoplay: {
		// 	delay: 5000,
		// },

		pagination: {
			el: '.hero-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
};
export const rightHeroSlider = () => {
	new Swiper('.hero-slider__right', {
		modules: [Autoplay],

		loop: true,

		// autoplay: {
		// 	delay: 5000,
		// },
	});
};
