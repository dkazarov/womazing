import Splide from '@splidejs/splide';

const newCollectionSlider = () => {
	const splide = new Splide('.splide', {
		type: 'loop',
		perPage: 3,
		rewind: true,
		gap: 30,
		autoplay: true,
		interval: 5000,
		pagination: false,
	});

	splide.mount();
};

export default newCollectionSlider;
