import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

const newCollectionSlider = () => {
	new Swiper('.new-coll__slider', {
		// configure Swiper to use modules
		modules: [Navigation, Autoplay],
		
		loop: true,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

export default newCollectionSlider;
