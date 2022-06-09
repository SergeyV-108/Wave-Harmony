/*============================= header =============================*/
//-------- Функционал формы поиска --------
let upperHeaderBtnSearch = document.querySelector('.upper-header__btn_search');

upperHeaderBtnSearch.addEventListener("click", function () {
	upperHeaderBtnSearch.previousElementSibling.classList.toggle('show');
});
//-------- Функционал бургера и меню --------
let showMenuButton = document.querySelector('.burger-menu');
let innerHeaderCover = document.querySelector('.inner-header__cover');
let innerHeaderLower = document.querySelector('.inner-header__lower');
let bodyLock = document.body;

showMenuButton.addEventListener("click", function () {
	innerHeaderLower.classList.add('active');
	innerHeaderCover.style.display = 'block';
	bodyLock.classList.add('lock');
});

let closeMenuButton = document.querySelector('.body-lower__title span');

closeMenuButton.addEventListener("click", function () {
	innerHeaderLower.classList.remove('active');
	innerHeaderCover.style.display = '';
	bodyLock.classList.remove('lock');
});

//-------- Добавление класса "fixed" header и входящим элементам --------
let header = document.querySelector('.header');
let upperHeaderLogo = document.querySelector('.upper-header__logo');
let upperHeaderButtons = document.querySelector('.upper-header__buttons');
let upperHeaderBtns = document.querySelectorAll('.upper-header__btn');
let lowerHeaderBody = document.querySelector('.lower-header__body');
let bodyLowerBox = document.querySelector('.body-lower__box');
let menuHeaderLinks = document.querySelectorAll('.menu-header__link');

function checkScroll() {
	let scrollPos = window.scrollY;
	if (document.documentElement.clientWidth > 780) {
		if (scrollPos > 92) {
			for (let menuHeaderLink of menuHeaderLinks) {
				menuHeaderLink.classList.add('fixed');
			}
			header.classList.add('fixed');
			lowerHeaderBody.classList.add('fixed');
			bodyLowerBox.append(upperHeaderButtons);
			for (let upperHeaderBtn of upperHeaderBtns) {
				upperHeaderBtn.classList.add('fixed');
			}
		} else {
			for (let menuHeaderLink of menuHeaderLinks) {
				menuHeaderLink.classList.remove('fixed');
			}
			header.classList.remove('fixed');
			lowerHeaderBody.classList.remove('fixed');
			upperHeaderLogo.after(upperHeaderButtons);
			for (let upperHeaderBtn of upperHeaderBtns) {
				upperHeaderBtn.classList.remove('fixed');
			}
		}
	}
}

//--------  Функционал menu-header__list --------
let bodyLowerMenu = document.querySelector('.body-lower__menu');
let menuHeaderList = document.querySelector('.menu-header__list');
let menuHeaderButton = document.querySelector('.menu-header__button');
let menuHeaderSublist = document.querySelector('.menu-header__sublist');

function replaceMenuLink() {
	if (document.documentElement.clientWidth > 780) {
		for (let i = 0; i < menuHeaderList.children.length; i++) {
			if (lowerHeaderBody.offsetWidth <= bodyLowerMenu.offsetWidth + bodyLowerBox.offsetWidth) {
				menuHeaderSublist.prepend(menuHeaderList.lastElementChild);
				menuHeaderButton.classList.add('show');
			} else if (menuHeaderButton && lowerHeaderBody.offsetWidth <= bodyLowerMenu.offsetWidth + bodyLowerBox.offsetWidth) {
				menuHeaderSublist.prepend(menuHeaderList.lastElementChild);
			} else {
				if (menuHeaderSublist.children.length > 0) {
					// Получение размера скрытого элемента
					menuHeaderSublist.style.display = 'flex';
					let subMenuLinkWidth = menuHeaderSublist.firstElementChild.offsetWidth;
					menuHeaderSublist.style = null;
					//-------------------------------------
					if (lowerHeaderBody.offsetWidth > bodyLowerMenu.offsetWidth + subMenuLinkWidth + bodyLowerBox.offsetWidth - menuHeaderButton.offsetWidth) {
						menuHeaderList.append(menuHeaderSublist.firstElementChild);
						if (menuHeaderSublist.children.length < 1) {
							menuHeaderButton.classList.remove('show');
							menuHeaderSublist.classList.remove('active');
						}
					}
				}
			}
		}
	}
}

//-------- Функционал menu-header__button --------
menuHeaderButton.addEventListener("click", function () {
	menuHeaderSublist.classList.toggle('active');
});

//-------- Функционал header__submenu --------
function showCatalogMenu() {

	let headerSubmenu = document.querySelector('.header__submenu');

	if (document.documentElement.clientWidth > 780) {
		menuHeaderList.firstElementChild.addEventListener("mouseenter", function () {
			headerSubmenu.classList.add('show');
		});

		menuHeaderList.firstElementChild.addEventListener("mouseleave", function (event) {
			if (event.relatedTarget.closest('.header__submenu')) {
				headerSubmenu.classList.add('show');
			} else {
				headerSubmenu.classList.remove('show');
			}
		});

		headerSubmenu.addEventListener("mouseleave", function () {
			headerSubmenu.classList.remove('show');
		});
	}
}

// После загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
	checkScroll();
	replaceMenuLink();
	showCatalogMenu();
});

// При изменения ширины страницы
window.addEventListener('resize', function () {
	upperHeaderLogo.after(upperHeaderButtons);

	checkScroll();
	replaceMenuLink();
	showCatalogMenu();
});

// После скрола страницы
window.addEventListener('scroll', function () {
	checkScroll();
	replaceMenuLink();
});

/*==================================================================*/

/*=========================== promo-page ===========================*/
//-------- Функционал триггеров promo -------- 
let triggerPromoBtns = document.querySelectorAll('.trigger-promo__btn');

for (let triggerPromoBtn of triggerPromoBtns) {
	triggerPromoBtn.onclick = function () {
		this.previousElementSibling.classList.toggle('active');
		this.childNodes[0].classList.toggle('active');
	}
};
/*==================================================================*/

/*========================== popular-page ==========================*/
//------- Функционал сердечка в карточке товара slide-popular ------
let imageCardBtns = document.querySelectorAll('.image-card__btn');

for (let imageCardBtn of imageCardBtns) {
	imageCardBtn.onclick = function () {
		this.classList.toggle('active');
	}
};
/*==================================================================*/

/*=========================== insta-page ===========================*/
//------- Увеличение картинки ------
let contentInstaItems = document.querySelectorAll('.content-insta__item');

for (let contentInstaItem of contentInstaItems) {
	contentInstaItem.onclick = function () {
		this.classList.toggle('active');
	}
};
/*==================================================================*/