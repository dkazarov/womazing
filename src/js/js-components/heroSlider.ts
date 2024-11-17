import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const leftHeroSlider = () => {
	new Swiper('.hero-left__slider', {
		modules: [Pagination, Autoplay],

		loop: true,

		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
};
export const rightHeroSlider = () => {
	new Swiper('.swiper', {
		modules: [Autoplay],

		loop: true,

		autoplay: {
			delay: 5000,
		},
	});
};
