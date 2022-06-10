/*======================= create-page ========================*/
//------------- Перенос блока body-create__image ---------------
let createPageBody = document.querySelector('.create-page__body');
let contentCreateText = document.querySelector('.content-create__text');
let bodyCreateImage = document.querySelector('.body-create__image');

changeLocation();

window.addEventListener('resize', function () {
	changeLocation();
});

function changeLocation() {
	if (createPageBody.offsetWidth < 1111) {
		contentCreateText.append(bodyCreateImage);
	} else {
		createPageBody.prepend(bodyCreateImage);
	}
}
//------------- Функционал модальных окон -------------------
// Окна кнопки "Пример +" -------------------
let tabCreatModals = document.querySelectorAll(".tab-create__modal");
let tabCreateSampleBtns = document.querySelectorAll(".tab-create__sample-btn");
let headerCreateCloses = document.querySelectorAll(".header-create__close");

for (let tabCreateSampleBtn of tabCreateSampleBtns) {
	tabCreateSampleBtn.onclick = function () {
		this.parentElement.nextElementSibling.classList.add('show');
		document.body.classList.add('lock');
	}
}

for (let headerCreateClose of headerCreateCloses) {
	headerCreateClose.onclick = function () {
		for (let tabCreateSampleBtn of tabCreateSampleBtns) {
			tabCreateSampleBtn.parentElement.nextElementSibling.classList.remove('show');
		}
		document.body.classList.remove('lock');
	}
}

// Окно выбора фасона -------------------
let inputStyle = document.getElementById('style');
let inputStyleClose = document.getElementById('styleClose');

inputStyle.parentElement.onclick = function () {
	if (window.innerWidth <= 660) {
		inputStyle.parentElement.nextElementSibling.classList.add('show');
		document.body.classList.add('lock');
	}
}

inputStyleClose.onclick = function () {
	inputStyle.parentElement.nextElementSibling.classList.remove('show');
	document.body.classList.remove('lock');
}

// Функционал выбора фасона ----------
let tabCreateOptionsStyle = document.querySelectorAll('.tab-create__option_style');

selectionStyle();

window.addEventListener('resize', function () {
	selectionStyle();
});

function selectionStyle() {

	for (let tabCreateOptionStyle of tabCreateOptionsStyle) {
		tabCreateOptionStyle.onclick = function () {
			if (window.innerWidth <= 660) {
				inputStyle.value = this.lastElementChild.innerHTML;
				inputStyle.parentElement.nextElementSibling.classList.remove('show');
				document.body.classList.remove('lock');
			}
		}

		if (tabCreateOptionStyle.firstElementChild.checked) {
			if (window.innerWidth <= 660) {
				inputStyle.value = tabCreateOptionStyle.lastElementChild.innerHTML;
			} else {
				inputStyle.value = '';
			}
		}
	}
}

window.onclick = function (event) {
	for (let tabCreatModal of tabCreatModals) {
		if (event.target == tabCreatModal) {
			for (let tabCreateSampleBtn of tabCreateSampleBtns) {
				tabCreateSampleBtn.parentElement.nextElementSibling.classList.remove('show');
			}
			inputStyle.parentElement.nextElementSibling.classList.remove('show');
			document.body.classList.remove('lock');
		}
	}
}

//------------- Функционал спойлера выбора цвет/принт ----------
let tabCreateOptions = document.querySelectorAll('.tab-create__option label[data-tab]');

for (let tabCreateOption of tabCreateOptions) {

	tabCreateOption.addEventListener("click", function () {

		let tabId = tabCreateOption.getAttribute("data-tab");
		let currentTabs = document.querySelectorAll(tabId);
		let tabCreateItems = document.querySelectorAll(".tab-create__item");

		for (let tabCreateItem of tabCreateItems) {
			tabCreateItem.classList.remove('active');

			for (let currentTab of currentTabs) {
				currentTab.classList.add('active');
			}
		}
	});
}
document.querySelector('.tab-create__option label[data-tab]').click();

//------------- Функционал табов и счетчика ---------------
let quantityButtons = document.querySelectorAll('.quantity__button');

for (let quantityButton of quantityButtons) {

	quantityButton.addEventListener("click", function (e) {

		let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
		let contentCreateTabs = document.querySelectorAll('.content-create__tab');

		if (quantityButton.classList.contains('quantity__button_prev')) {
			value--;
			if (value <= 1) {
				value = 1;
				quantityButton.classList.add('disable');
			} else {
				quantityButton.classList.remove('disable');
			}
			document.querySelector('.quantity__button_next').style.display = 'block';
			document.querySelector('.quantity__button_sum').style.display = 'none';

		} else {
			value++;
			document.querySelector('.quantity__button_prev').classList.remove('disable');
			if (value >= 5) {
				value = 5;
				document.querySelector('.quantity__button_next').style.display = 'none';
				document.querySelector('.quantity__button_sum').style.display = 'flex';
			} 
			
		}

		quantityButton.closest('.quantity').querySelector('input').value = value;

		for (let contentCreateTab of contentCreateTabs) {
			if (contentCreateTab.id == value) {
				for (let contentCreateTab of contentCreateTabs) {
					if (contentCreateTab.classList.contains('show')) {
						contentCreateTab.classList.remove('show');
					}
				}
				contentCreateTab.classList.add('show');
			}
		}
	});
}
/*==================================================================*/



