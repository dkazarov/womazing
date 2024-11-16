const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger__line');
const nav = document.querySelector('.nav');
const cart = document.querySelector('.cart');
const body = document.querySelector('body');
const navItem = document.querySelectorAll('.nav__item');

export const burgerOpen = (): void => {
	burger.addEventListener('click', () => {
		burgerLine.classList.toggle('line--hide');
		burger.classList.toggle('burger--transform');
		nav.classList.toggle('overlay');
		cart.classList.toggle('overlay');
		body.classList.toggle('stop-scroll');
	});
};
export const burgerClose = (): void => {
	navItem.forEach(element => {
		element.addEventListener('click', () => {
			burgerLine.classList.remove('line--hide');
			burger.classList.remove('burger--transform');
			nav.classList.remove('overlay');
			cart.classList.remove('overlay');
			body.classList.remove('stop-scroll');
		});
	});
};
