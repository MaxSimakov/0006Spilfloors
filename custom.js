const swiperColors = new Swiper('.colors__slider--js', {
	// Optional parameters
	loop: true,
	watchOverflow: true,
	slidesPerView: 3,
	spaceBetween: 5,
	lazy: {
		loadPrevNext: true,
	},
	// Responsive breakpoints
	breakpoints: {
		768: {
			slidesPerView: 5,
			spaceBetween: 10,
		},

	},
	// Navigation arrows
	navigation: {
		nextEl: '.colors .swiper-button-next',
		prevEl: '.colors .swiper-button-prev',
	},
});

const swiperDetails = new Swiper('.details__slider--js', {
	// Optional parameters
	loop: true,
	watchOverflow: true,
	slidesPerView: 2,
	spaceBetween: 5,
	lazy: {
		loadPrevNext: true,
	},
	// Responsive breakpoints
	breakpoints: {
		768: {
			spaceBetween: 10,
		},

	},
	// // Navigation arrows
	// navigation: {
	// 	nextEl: '.colors .swiper-button-next',
	// 	prevEl: '.colors .swiper-button-prev',
	// },
});

