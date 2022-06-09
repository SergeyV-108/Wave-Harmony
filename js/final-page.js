/*======================= final-page ========================*/
//------------- Перемещение блока aside под слайдер ---------------
let wrapper = document.querySelector('.wrapper');
let finalPageSide = document.querySelector('.final-page__side');
let sideFinalInner = document.querySelector('.side-final__inner');
let contentFinalSliders = document.querySelector('.content-final__sliders');

changePlace();

window.addEventListener('resize', function () {
	finalPageSide.append(sideFinalInner);
	changePlace();
});

function changePlace() {
	if (wrapper.offsetWidth < 1251) {
		contentFinalSliders.after(sideFinalInner);
	}
}
//------------- Фунционал списка категорий товаров ---------------
let itemsFinalTitle = document.querySelectorAll('.item-final__title');

for (let itemFinalTitle of itemsFinalTitle) {

	itemFinalTitle.onclick = function () {

		for (let itemFinalTitle of itemsFinalTitle) {
			itemFinalTitle.lastElementChild.classList.remove('active');
			itemFinalTitle.nextElementSibling.classList.remove('show');
		}

		this.lastElementChild.classList.toggle('active');
		this.nextElementSibling.classList.toggle('show');
	}
};
document.querySelector('.item-final__title').click();

// Фунционал звездочек модального окна отзыва -------------
const headerSideBox = document.querySelector('.header-side__box');

initRatings();

function initRatings() {
	let ratingActive,
		ratingValue;

	initRating(headerSideBox);

	function initRating(headerSideBox) {
		initRatingVars(headerSideBox);
		setRatingActiveWidth();

		// --- Управление вручную 

		// if (headerSideBox.classList.contains('raiting_set')) {
		// 	setRating(headerSideBox);
		// }
	}

	function initRatingVars(headerSideBox) {
		ratingActive = headerSideBox.querySelector('.header-side__active');
		ratingValue = headerSideBox.querySelector('.header-side__value');
	}

	function setRatingActiveWidth(index = ratingValue.firstElementChild.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}

	// --- Управление вручную 

	// function setRating(headerSideBox) {
	// 	const ratingItems = headerSideBox.querySelectorAll('.header-side__input');
	// 	for (let index = 0; index < ratingItems.length; index++) {
	// 		const ratingItem = ratingItems[index];
	// 		ratingItem.addEventListener("mouseenter", function (e) {
	// 			//обновление переменных
	// 			initRatingVars(headerSideBox);
	// 			//обновление активных звезд
	// 			setRatingActiveWidth(ratingItem.value);
	// 		});
	// 		ratingItem.addEventListener("mouseleave", function (e) {
	// 			//обновление активных звезд
	// 			setRatingActiveWidth();
	// 		});
	// 		ratingItem.addEventListener("click", function (e) {
	// 			//обновление переменных
	// 			initRatingVars(headerSideBox);
	// 			if (headerSideBox.dataset.ajax) {
	// 				//"отправить" на сервер
	// 				setRating(ratingItem.value, headerSideBox)
	// 			} else {
	// 				//отобразить указанную оценку
	// 				ratingValue.innerHTML = index + 1;
	// 				setRatingActiveWidth();
	// 			}
	// 		});
	// 	}
	// }
}
//------------- Фунционал списка выбора размера ---------------
let selectDisable = document.querySelector('.select-side__disable');

selectDisable.onclick = function () {
	selectDisable.firstElementChild.classList.toggle('active');
	selectDisable.lastElementChild.classList.toggle('show');
}

let optionsValue = document.querySelectorAll('[data-value]');

for (let optionValue of optionsValue) {
	optionValue.onclick = function () {
		let optionText = this.firstElementChild.textContent;
		let dataValue = this.getAttribute('data-value');
		let selectDisableValue = optionValue.closest('.select-side__disable').firstElementChild;

		selectDisableValue.firstElementChild.textContent = optionText;
		selectDisableValue.closest('.center-side__select').setAttribute('data-selected-value', dataValue);
	}
}

//------------- Открытие/закрытие модальных окoн-------------
let modalBtns = document.querySelectorAll('[data-modal-btn]');
let modalWindows = document.querySelectorAll('.modal-window');

for (let modalBtn of modalBtns) {
	modalBtn.onclick = function () {

		let currentModalBtn = this.getAttribute('data-modal-btn');
		let currentModalWin = document.querySelector(currentModalBtn);

		currentModalWin.classList.add('show');
		document.body.classList.add('lock');
	}
}

let modalCloseBtns = document.querySelectorAll('.modal-close');

for (let modalCloseBtn of modalCloseBtns) {
	modalCloseBtn.onclick = function () {
		for (let modalWindow of modalWindows) {
			modalWindow.classList.remove('show');
		}
		document.body.classList.remove('lock');
	}
}

window.onclick = function (event) {
	for (let modalWindow of modalWindows) {
		if (event.target == modalWindow) {
			modalWindow.classList.remove('show');
			document.body.classList.remove('lock');
		}
	}
}

let modalCardBtns = document.getElementsByClassName('modal-card__btn');

for (let modalCardBtn of modalCardBtns) {
	modalCardBtn.onclick = function () {
		this.closest('.modal-window').classList.remove('show');
		document.body.classList.remove('lock');

		let currentModalBtn = this.getAttribute('data-modal-btn');
		let currentModalWin = document.querySelector(currentModalBtn);

		currentModalWin.classList.add('show');
		document.body.classList.add('lock');
	}
}
/*==================================================================*/
