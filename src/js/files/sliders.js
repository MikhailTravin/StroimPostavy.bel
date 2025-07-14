/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Перечень слайдеров
if (document.querySelector('.works__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер

	var worksSlider = null;
	var mediaQuerySize = 991.98;

	function catalogSliderInit() {
		if (!worksSlider) {
			worksSlider = new Swiper('.works__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation],
				observer: true,
				observeParents: true,
				speed: 800,
				spaceBetween: 10,
				preloadImages: true,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.works__arrow-prev',
					nextEl: '.works__arrow-next',
				},

				// Брейкпоинты
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					600: {
						slidesPerView: 1.5,
					},
					767.98: {
						slidesPerView: 2.5,
					},
				},
			});
		}
	}

	function catalogSliderDestroy() {
		if (worksSlider) {
			worksSlider.destroy();
			worksSlider = null;
		}
	}
	window.addEventListener('resize', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize(1024)
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			catalogSliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			catalogSliderDestroy()
		}
	});
	window.addEventListener('load', function (e) {
		var windowWidth = window.innerWidth;

		// Если ширина экрана меньше или равна mediaQuerySize(1024)
		if (windowWidth <= mediaQuerySize) {
			// Инициализировать слайдер если он ещё не был инициализирован
			catalogSliderInit()
		} else {
			// Уничтожить слайдер если он был инициализирован
			catalogSliderDestroy()
		}
	});
};

if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 6,
		spaceBetween: 30,
		speed: 800,
		preloadImages: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.reviews__arrow-prev',
			nextEl: '.reviews__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			479.98: {
				slidesPerView: 2.5,
				spaceBetween: 10,
			},
			767.98: {
				slidesPerView: 3.5,
				spaceBetween: 10,
			},
			991.98: {
				slidesPerView: 4.5,
				spaceBetween: 20,
			},
			1430: {
				slidesPerView: 6,
				spaceBetween: 30,
			},
		},
	});
}

document.querySelectorAll('.item-works__sliders').forEach(n => {
	const itemWorksSlider = new Swiper(n.querySelector('.item-works__slider'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 800,
		preloadImages: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.item-works__arrow-prev'),
			nextEl: n.querySelector('.item-works__arrow-next'),
		},
	});
});