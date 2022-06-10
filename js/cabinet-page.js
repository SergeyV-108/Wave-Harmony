/*======================= cabinet-page ========================*/
// Навигация по кабинету -------------
let tabBtns = document.querySelectorAll('[data-tab]');
let bodyCabinetTabs = document.querySelectorAll('.body-cabinet__tab');

onTabClick();

function onTabClick() {
	for (let tabBtn of tabBtns) {
		tabBtn.addEventListener("click", function () {

			let tabId = tabBtn.getAttribute('data-tab');
			let currentTab = document.querySelector(tabId);

			if (!tabBtn.classList.contains('active')) {
				for (let tabBtn of tabBtns) {
					tabBtn.classList.remove('active');
				}

				for (let bodyCabinetTab of bodyCabinetTabs) {
					bodyCabinetTab.classList.remove('show');
				}

				tabBtn.closest('.body-cabinet__wrapper').previousElementSibling.textContent = tabBtn.textContent;
				tabBtn.classList.add('active');
				currentTab.classList.add('show');
			}
		});
	}
}
//Вешается active на первый data-tab
document.querySelector('[data-tab]').click();

//------------- Функционал вызова menu кабинета -------------
let bodyCabinetBtn = document.querySelector('.body-cabinet__btn');
let bodyCabinetSide = document.querySelector('.body-cabinet__side');
let sideCabinetHeader = document.querySelector('.side-cabinet__header span');

bodyCabinetBtn.onclick = function () {
	bodyCabinetSide.classList.add('show');
	document.body.classList.add('lock');
}

for (let tabBtn of tabBtns) {
	tabBtn.onclick = function () {
		bodyCabinetSide.classList.remove('show');
		document.body.classList.remove('lock');
	}
}

sideCabinetHeader.onclick = function () {
	bodyCabinetSide.classList.remove('show');
	document.body.classList.remove('lock');
}

window.onclick = function (event) {
	if (event.target == bodyCabinetSide) {
		bodyCabinetSide.classList.remove('show');
	}
	document.body.classList.remove('lock');
}

//======================= cabinet-orders =======================
//------------- Функционал карточек заказов -------------
let cabinetOrdersItems = document.querySelectorAll('.cabinet-orders__item');

for (let cabinetOrdersItem of cabinetOrdersItems) {
	let itemsOrdersCard = cabinetOrdersItem.querySelectorAll('.item-orders__card');

	// Количество товара в карточке заказа ------------- 
	cabinetOrdersItem.querySelector('.item-quantity span').innerHTML = itemsOrdersCard.length;

	// Итоговая сумма в карточке заказа ------------- 
	let sumPrice = 0;

	for (let itemOrdersCard of itemsOrdersCard) {
		let cardOrderingPrice = parseInt(itemOrdersCard.querySelector('.card-orders__price').innerHTML);

		sumPrice += cardOrderingPrice;
		itemOrdersCard.closest('.cabinet-orders__item').querySelector('.item-orders__sum span').innerHTML = sumPrice + ' руб.';
	}
}
// Функционал спойлеров -------------
let itemsOrdersHeader = document.querySelectorAll('.item-orders__header');

for (let itemOrdersHeader of itemsOrdersHeader) {
	itemOrdersHeader.onclick = function () {
		this.lastElementChild.classList.toggle('active');
		this.nextElementSibling.classList.toggle('show');
	}
};

//======================= cabinet-personal =======================
// Функционал кнопок редактирования профиля -------------
let cabinetPersonalBtns = document.querySelectorAll('.cabinet-personal__btn');
let cabinetPersonalBtnEdit = document.querySelector('.cabinet-personal__btn_edit');
let cabinetPersonalItems = document.querySelectorAll('.cabinet-personal__item');

for (let cabinetPersonalBtn of cabinetPersonalBtns) {
	cabinetPersonalBtn.onclick = function () {
		if (cabinetPersonalBtn.classList.contains('cabinet-personal__btn_edit')) {
			for (let cabinetPersonalItem of cabinetPersonalItems) {
				cabinetPersonalItem.classList.remove('accept');
				cabinetPersonalItem.firstElementChild.disabled = false;
			}
			for (let cabinetPersonalBtn of cabinetPersonalBtns) {
				cabinetPersonalBtn.classList.add('show');
			}
			cabinetPersonalBtn.classList.remove('show');
		} else {
			for (let cabinetPersonalItem of cabinetPersonalItems) {
				cabinetPersonalItem.classList.add('accept');
				cabinetPersonalItem.firstElementChild.disabled = true;
			}
			for (let cabinetPersonalBtn of cabinetPersonalBtns) {
				cabinetPersonalBtn.classList.remove('show');
			}
			cabinetPersonalBtnEdit.classList.add('show');
		}
	}
}

//======================= cabinet-password =======================
// Скрыть/показать пароль -------------
let cabinetPasswordItems = document.querySelectorAll(".cabinet-password__item i");

for (let cabinetPasswordItem of cabinetPasswordItems) {
	cabinetPasswordItem.onclick = function () {
		this.classList.toggle('show');

		if (this.nextElementSibling.type === "password") {
			this.nextElementSibling.type = "text";
		} else {
			this.nextElementSibling.type = "password";
		}
	}
}

let cabinetPasswordBtn = document.querySelector(".cabinet-password__btn");

cabinetPasswordBtn.onclick = function () {
	cabinetPasswordBtn.nextElementSibling.style.display = 'block';
}

//======================= cabinet-wishlist =======================
// Открытие wishlist -------------
let upperHeaderBtnHeart = document.querySelector(".upper-header__btn_heart");
let cabinetPageWishlist = document.querySelector(".cabinet-page__wishlist");

upperHeaderBtnHeart.onclick = function () {
	cabinetPageWishlist.style.display = 'block';
}

// Закрытие wishlist -------------
let cabinetWishlistClose = document.querySelector(".header-wishlist__close");

cabinetWishlistClose.onclick = function () {
	cabinetPageWishlist.style.display = 'none';
}

// Выделение/удаление карточек товара -------------
let cabinetWishlistOption = document.querySelector(".cabinet-wishlist__option");
let cabinetWishlistDelete = document.querySelector(".cabinet-wishlist__delete");
let cabinetWishlistItems = document.querySelectorAll(".cabinet-wishlist__item");
let currentItems = {
	length: 0,
};

checkingItem();

cabinetWishlistOption.onclick = checkingItem;

function checkingItem() {
	if (cabinetWishlistItems.length > 0) {
		for (let cabinetWishlistItem of cabinetWishlistItems) {
			if (cabinetWishlistOption.querySelector('input').checked) {
				cabinetWishlistItem.querySelector('input').checked = true;
				cabinetWishlistOption.querySelector('label').textContent = 'Снять отметки';
				cabinetWishlistDelete.style.display = 'block';
				currentItems.length = cabinetWishlistItems.length;
			} else {
				cabinetWishlistItem.querySelector('input').checked = false;
				cabinetWishlistOption.querySelector('label').textContent = 'Отметить все товары';
				cabinetWishlistDelete.style.display = 'none';
				currentItems.length = '0';
			}
		}
	} else {
		cabinetWishlistOption.style.display = 'none';
	}
}

if (cabinetWishlistItems.length > 0) {
	for (let cabinetWishlistItem of cabinetWishlistItems) {
		cabinetWishlistItem.querySelector('input').onclick = function () {
			if (cabinetWishlistItem.querySelector('input').checked) {
				cabinetWishlistDelete.style.display = 'block';
				++currentItems.length;
			} else {
				--currentItems.length;
			}
			if (currentItems.length == 0) {
				cabinetWishlistOption.querySelector('input').checked = false;
				cabinetWishlistOption.querySelector('label').textContent = 'Отметить все товары';
				cabinetWishlistDelete.style.display = 'none';
			}
		}

		cabinetWishlistItem.querySelector('.item-wishlist__delete').onclick = function () {
			this.parentElement.remove();
		}
	}
}

cabinetWishlistDelete.onclick = function () {
	cabinetWishlistOption.querySelector('input').checked = false;
	cabinetWishlistOption.querySelector('label').textContent = 'Отметить все товары';
	cabinetWishlistDelete.style.display = 'none';
	currentItems.length = '0';

	for (let i = 0; i < cabinetWishlistItems.length; i++) {
		if (cabinetWishlistItems[i].querySelector('input').checked) {
			cabinetWishlistItems[i].remove();
		}
	}
}

/*==================================================================*/



