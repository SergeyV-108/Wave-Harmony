/*======================= ordering-page ========================*/
//------------- Функционал карточки товара ---------------
// Счетчик
let quantityOrderingButtons = document.querySelectorAll('.quantity-ordering__button');

for (let quantityOrderingButton of quantityOrderingButtons) {

	let cardOrderingPrice = quantityOrderingButton.closest('.card-ordering__number').previousElementSibling.firstChild;
	const onePrice = parseInt(cardOrderingPrice.innerHTML);

	quantityOrderingButton.addEventListener("click", function (e) {

		let value = parseInt(quantityOrderingButton.closest('.quantity-ordering').querySelector('input').value);
		let sumPrice = parseInt(cardOrderingPrice.innerHTML);

		if (quantityOrderingButton.classList.contains('quantity-ordering__button_plus')) {
			value++;
			cardOrderingPrice.innerHTML = sumPrice + onePrice;
		} else {
			value--;
			cardOrderingPrice.innerHTML = sumPrice - onePrice;

			if (value < 1) {
				value = 1
				cardOrderingPrice.innerHTML = onePrice;
			}
		}

		totalCalculation();
		quantityOrderingButton.closest('.quantity-ordering').querySelector('input').value = value;

	});
}
// Итоговая сумма
let cardTotalPromocost = document.querySelector('.card-total__promocost');

function totalCalculation() {
	let orderingPageCards = document.querySelectorAll('.ordering-page__card');
	let itemOrderingTotal = document.querySelector('.item-ordering__total').children[1];
	let cardTotalCost = document.querySelector('.card-total__cost');
	let sumPrice = 0;

	if (orderingPageCards.length > 0) {
		for (i = 0; i < orderingPageCards.length; i++) {
			let cardOrderingPrice = Number(orderingPageCards[i].querySelector('.card-ordering__price').firstChild.innerHTML);

			sumPrice += cardOrderingPrice;
			itemOrderingTotal.innerHTML = sumPrice + ' руб.';
		}
	} else {
		itemOrderingTotal.innerHTML = sumPrice + ' руб.';
	}

	if (cardTotalPromocost.parentElement.classList.contains('active')) {
		cardTotalCost.innerHTML = parseInt(itemOrderingTotal.innerHTML) - parseInt(cardTotalPromocost.innerHTML) + ' руб.';
	} else {
		cardTotalCost.innerHTML = itemOrderingTotal.innerHTML;
	}
}

totalCalculation();

// Кнопка delete
let cardsOrderingDelete = document.querySelectorAll('.card-ordering__delete');

for (let cardOrderingDelete of cardsOrderingDelete) {

	cardOrderingDelete.addEventListener("click", function () {
		this.closest('.ordering-page__card').remove();
		totalCalculation();
	});
}

//------------- Функционал модального окна входа/регистрации ---------------
let headerIitemLogin = document.querySelector('.header-item__login');
let itemOrderingModal = document.querySelector('.item-ordering__modal');
let cardsModalClose = itemOrderingModal.querySelectorAll(".card-modal__close");

// Открытие/закрытие модального окна
headerIitemLogin.onclick = function () {
	itemOrderingModal.classList.add('show');
	document.body.classList.add('lock');
}

for (let cardModalClose of cardsModalClose) {
	cardModalClose.onclick = function () {
		itemOrderingModal.classList.remove('show');
		document.body.classList.remove('lock');
	}
}
// Выбор окна входа/регистрации
let cardsModalLink = itemOrderingModal.querySelectorAll(".card-modal__link");

for (let cardModalLink of cardsModalLink) {
	cardModalLink.onclick = function () {
		let linkId = this.getAttribute('href');
		let currentLink = itemOrderingModal.querySelector(linkId);

		for (i = 0; i < itemOrderingModal.children.length; i++) {
			itemOrderingModal.children[i].classList.remove('active');
		}

		currentLink.classList.add('active');
	}
}
// Скрыть/показать пароль
let cardsModalRow = itemOrderingModal.querySelectorAll(".card-modal__row i");

for (let cardModalRow of cardsModalRow) {
	cardModalRow.onclick = function () {
		this.classList.toggle('show');

		if (this.nextElementSibling.type === 'password') {
			this.nextElementSibling.type = "text";
		} else {
			this.nextElementSibling.type = "password";
		}
	}
}
// Функционал окна завершения регистрации
let cardModalBtnRegistration = itemOrderingModal.querySelector('.card-modal__btn_registration');
let cardsModalBtnClose = itemOrderingModal.querySelectorAll('.card-modal__btn_close');

cardModalBtnRegistration.onclick = function () {
	for (i = 0; i < itemOrderingModal.children.length; i++) {
		itemOrderingModal.children[i].classList.remove('active');
	}
	itemOrderingModal.lastElementChild.classList.add('active');
}

for (let cardModalBtnClose of cardsModalBtnClose) {
	cardModalBtnClose.onclick = function () {
		itemOrderingModal.classList.remove('show');
	}
}
// Функционал окна восстановления пароля
let cardModalButton = itemOrderingModal.querySelector('.card-modal__button');
let cardModalBtnRecovery = itemOrderingModal.querySelector('.card-modal__btn_recovery');

function changeCard() {
	this.closest('.modal-ordering__card').classList.remove('active');
	this.closest('.modal-ordering__card').nextElementSibling.classList.add('active');
}

cardModalButton.onclick = changeCard;
cardModalBtnRecovery.onclick = changeCard;

//------------- Функционал спойлеров блока "Способ доставки" ---------------
let itemsOrderingOptionLabel = document.querySelectorAll('.item-ordering__option label');
let itemsOrderingCost = document.querySelectorAll('.item-ordering__cost');
let costObj = {};

for (let itemOrderingOptionLabel of itemsOrderingOptionLabel) {

	itemOrderingOptionLabel.onclick = function () {
		let approximateCost = this.closest('.item-ordering__option').nextElementSibling.firstElementChild.innerHTML;

		let itemsOrderingContentShow = document.querySelectorAll('.item-ordering__content.show');
		let itemsOrderingСostLoad = document.querySelectorAll('.item-ordering__cost.load');

		for (let itemOrderingContentShow of itemsOrderingContentShow) {
			itemOrderingContentShow.classList.remove('show');
			itemOrderingContentShow.closest('.item-ordering__row').classList.remove('active');
		}

		for (let itemOrderingСostLoad of itemsOrderingСostLoad) {
			itemOrderingСostLoad.innerHTML = costObj.costOption;
			itemOrderingСostLoad.classList.remove('load');
		}

		if (this.closest('.item-ordering__option').nextElementSibling.querySelector('.item-ordering__cost')) {
			this.closest('.item-ordering__option').nextElementSibling.querySelector('.item-ordering__cost').innerHTML = " ";
			this.closest('.item-ordering__option').nextElementSibling.querySelector('.item-ordering__cost').classList.add('load');
		}

		this.closest('.item-ordering__row').lastElementChild.classList.add('show');
		this.closest('.item-ordering__row').classList.add('active');

		costObj.costOption = approximateCost;
	}
};

//------------- Функционал блока aside ---------------
// Функционал блока промокода
let promocodeTotalBtn = document.querySelector('.promocode-total__btn');

promocodeTotalBtn.addEventListener("click", function () {
	this.style.display = 'none';
	this.nextElementSibling.style.display = 'block';
});

let formPromocodeBtn = document.querySelector('.form-promocode__btn');

formPromocodeBtn.addEventListener("click", function () {
	cardTotalPromocost.parentElement.classList.add('active')
	totalCalculation();
});
/*==================================================================*/



