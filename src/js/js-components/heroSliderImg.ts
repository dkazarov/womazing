import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const heroImgSlider = () => {
	new Swiper('.hero__images', {
		// configure Swiper to use modules
		modules: [Navigation, Autoplay, Pagination],

		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

export default heroImgSlider;
