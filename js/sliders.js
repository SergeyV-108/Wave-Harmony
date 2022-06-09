/*======================= sliders ========================*/
// ============ slider-popular ============
var popularSlider = new Swiper('.popular-page__slider', {

	navigation: {
		nextEl: ".navigation-popular__button_next",
		prevEl: ".navigation-popular__button_prev",
	},

	//Кол-во слайдов для показа
	slidesPerView: "auto",

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//Отступ между слайдами
	spaceBetween: 20,

});

// ============ slider-promo ============
var promoSlider = new Swiper('.promo-page__slider', {

	pagination: {
		el: ".promo-page__pagination",
		clickable: true,
	},

	//Кол-во слайдов для показа
	slidesPerView: 1,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//Отступ между слайдами
	spaceBetween: 50,

	//Активный слайд по центру
	centeredSlides: true,

	//Индексный номер начального слайда
	initialSlide: 1,

	centerInsufficientSlides: true,
});

// ============ slider-reviews ============
var reviewsSlider = new Swiper('.reviews-page__slider', {

	scrollbar: {
		el: '.slider-reviews__scrollbar',
		draggable: true,
	},

	//Расстояние между слайдами
	spaceBetween: 10,

	//Кол-во слайдов для показа
	slidesPerView: 'auto',

	//Видимость прогресса слайдов
	watchSlidesProgress: true,

	breakpoints: {
		// when window width is >= 624px
		625: {
			direction: "vertical",

			//Расстояние между слайдами
			spaceBetween: 15
		},
	}
});

var reviewsSliderMain = new Swiper('.reviews-page__slider-main', {

	thumbs: {
		swiper: reviewsSlider,
	},

	autoHeight: true,

	//Кол-во слайдов для показа
	slidesPerView: 1,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//Расстояние между слайдами
	spaceBetween: 10,

	//centerSlides: true,

	breakpoints: {
		// when window width is >= 624px
		625: {
			//Расстояние между слайдами
			spaceBetween: 50
		},
	}
});

//----- выравнивание высот слайдеров reviews при window resize -----
let reviewsPageSlider = document.querySelector('.reviews-page__slider');
let sliderMainReviewsSlide = document.querySelector('.slider-main-reviews__slide.swiper-slide-active'); 

if (reviewsPageSlider) {
	changeHeight();

	// При изменения ширины страницы
	reviewsSliderMain.on('resize', function () {
		changeHeight();
	});
	// При смене активного слайда в reviewsSliderMain
	reviewsSliderMain.on('transitionEnd', function () {
		changeHeight();
	});
}

function changeHeight() {
	let slideMainHeight = sliderMainReviewsSlide.offsetHeight;
	
	if (document.documentElement.clientWidth > 624) {
		reviewsPageSlider.style.height = `${slideMainHeight}px`;
	} else {
		reviewsPageSlider.style.height = 'auto';
	}
}
// ============ slider-partners ============
var partnersSlider = new Swiper('.item-partners__slider', {

	navigation: {
		nextEl: ".navigation-partners__button_next",
		prevEl: ".navigation-partners__button_prev",
	},

	//Кол-во слайдов для показа
	slidesPerView: "auto",

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//Отступ между слайдами
	spaceBetween: 5,
});

// ============ slider-final ============
var finalSlider = new Swiper('.content-final__slider', {

	navigation: {
		nextEl: ".slider-final__navigation_next",
		prevEl: ".slider-final__navigation_prev",
	},

	direction: "vertical",

	//Расстояние между слайдами
	spaceBetween: 18,

	//Кол-во слайдов для показа
	slidesPerView: 'auto',

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//Видимость прогресса слайдов
	watchSlidesProgress: true,

});

var finalSliderMain = new Swiper('.content-final__slider-main', {

	thumbs: {
		swiper: finalSlider,
	},

	navigation: {
		nextEl: ".slider-main-final__navigation_next",
		prevEl: ".slider-main-final__navigation_prev",
	},

	pagination: {
		el: ".slider-main-final__pagination",
		clickable: true,
	},

	effect: "fade",

	//Кол-во слайдов для показа
	slidesPerView: 1,

	//Кол-во пролистываемых слайдов
	slidesPerGroup: 1,

});