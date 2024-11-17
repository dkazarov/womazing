import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const leftHeroSlider = () => {
	new Swiper('.hero-left__slider', {
		modules: [Pagination],
	});
};
export const rightHeroSlider = () => {
	new Swiper('.swiper', {
		modules: [Navigation, Pagination],

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};
