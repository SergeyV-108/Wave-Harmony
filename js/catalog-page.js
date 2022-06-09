/*======================= catalog-page ========================*/
//------------- Фильтр сортировки и отбора ---------------
// Функционал кнопки фильтра 
let headerCatalogFilterBtn = document.querySelector('.header-catalog__filter-btn');

headerCatalogFilterBtn.onclick = function () {
	headerCatalogFilterBtn.nextElementSibling.classList.toggle('show');
}
// Функционал открытия выпадающего списка сортировки 
let filterCatalogSelectings = document.querySelectorAll('.filter-catalog__selecting');
let filterCatalogCloses = document.querySelectorAll('.filter-catalog__close');
let filterCatalogButtons = document.querySelectorAll('.filter-catalog__button');

for (let filterCatalogSelecting of filterCatalogSelectings) {
	filterCatalogSelecting.onclick = function () {
		this.children[1].classList.toggle('active');
		this.children[2].classList.toggle('active');
		this.nextElementSibling.classList.toggle('show');
	}
}
// Функционал отбора опций выпадающего списка сортировки
let optionsValue = document.querySelectorAll('[data-value]');
let valueObj = {}

for (let optionValue of optionsValue) {
	optionValue.onclick = function () {
		valueObj.optionText = this.textContent;
		valueObj.dataValue = this.getAttribute('data-value');
	}
}

for (let filterCatalogButton of filterCatalogButtons) {
	filterCatalogButton.onclick = function () {
		this.closest('.header-catalog__filter').firstElementChild.children[1].classList.remove('active');
		this.closest('.header-catalog__filter').firstElementChild.children[2].classList.remove('active');
		this.closest('.header-catalog__filter').firstElementChild.nextElementSibling.classList.remove('show');

		if (this.closest('.header-catalog__filter').firstElementChild.hasAttribute('data-selected-value')) {
			if (valueObj.optionText) {
				this.closest('.header-catalog__filter').firstElementChild.children[0].textContent = valueObj.optionText;
			}
			this.closest('.header-catalog__filter').firstElementChild.setAttribute('data-selected-value', valueObj.dataValue);
		}

		if (this.closest('.header-catalog__filter').firstElementChild.hasAttribute('data-filtered-value')) {
			this.closest('.header-catalog__filter').firstElementChild.setAttribute('data-filtered-value', valueObj.dataValue);
		}
	}
}
// Функционал кнопки закрытия выпадающего списка сортировки 
for (let filterCatalogClose of filterCatalogCloses) {
	filterCatalogClose.onclick = function () {
		this.closest('.filter-catalog__card').classList.remove('show');
		for (let i = 0; i < this.closest('.filter-catalog__card').previousElementSibling.children.length; i++) {
			this.closest('.filter-catalog__card').previousElementSibling.children[i].classList.remove('active');
		}
	}
}
// Ползунки цен фильтра 
var costRange = document.getElementById('cost-slider');

noUiSlider.create(costRange, {
	start: [1500, 7000],
	behaviour: 'tap-drag',
	tooltips: true,
	connect: true,
	format: wNumb({
		decimals: 0
	}),
	range: {
		'min': 0,
		'max': 10000
	}
});
var inputNumberFrom = document.getElementById('from');
var inputNumberTo = document.getElementById('to');

costRange.noUiSlider.on('update', function (values, handle) {
	var value = values[handle];
	if (handle) {
		inputNumberTo.value = value;
	} else {
		inputNumberFrom.value = value;
	}
});

inputNumberFrom.addEventListener('change', function () {
	costRange.noUiSlider.set([this.value, null]);
});
inputNumberTo.addEventListener('change', function () {
	costRange.noUiSlider.set([null, this.value]);
});

//------------- Фунционал списка категорий товаров ---------------
let sideBodyButton = document.querySelector('.side-body__button');
let sideBodyClose = document.querySelector('.side-body__close');

sideBodyButton.onclick = function () {
	sideBodyButton.nextElementSibling.classList.add('show');
}

sideBodyClose.onclick = function () {
	sideBodyButton.nextElementSibling.classList.remove('show');
}
//------------- Фунционал сетки карточек товаров ---------------
let layoutBtns = document.querySelectorAll('[data-grid]');
let contentBodyCards = document.querySelector('[data-layout]');
let dataGrid;

function changeGrid() {
	for (let layoutBtn of layoutBtns) {
		layoutBtn.onclick = function () {
			for (let layoutBtn of layoutBtns) {
				layoutBtn.classList.remove('active');
			}
			this.classList.add('active');
			dataGrid = this.getAttribute('data-grid');

			contentBodyCards.setAttribute('data-layout', dataGrid);
		}
	}
}

let desktopLayoutBtns = document.getElementsByClassName('desktop-layout__btn');
let mobileLayoutBtns = document.getElementsByClassName('mobile-layout__btn');

function layoutGrid() {
	if (document.documentElement.clientWidth > 840) {
		desktopLayoutBtns[desktopLayoutBtns.length - 1].style.display = "block"
		dataGrid = desktopLayoutBtns[desktopLayoutBtns.length - 1].getAttribute('data-grid');
		for (let desktopLayoutBtn of desktopLayoutBtns) {
			desktopLayoutBtn.classList.remove('active');
		}
		desktopLayoutBtns[desktopLayoutBtns.length - 1].classList.add('active');
		contentBodyCards.setAttribute('data-layout', dataGrid);
	} else {
		desktopLayoutBtns[desktopLayoutBtns.length - 1].style.display = "none"
		dataGrid = desktopLayoutBtns[desktopLayoutBtns.length - 2].getAttribute('data-grid');
		for (let desktopLayoutBtn of desktopLayoutBtns) {
			desktopLayoutBtn.classList.remove('active');
		}
		desktopLayoutBtns[desktopLayoutBtns.length - 2].classList.add('active');
		contentBodyCards.setAttribute('data-layout', dataGrid);
	}

	if (document.documentElement.clientWidth <= 660) {
		dataGrid = mobileLayoutBtns[0].getAttribute('data-grid');
		for (let mobileLayoutBtn of mobileLayoutBtns) {
			mobileLayoutBtn.classList.remove('active');
		}
		mobileLayoutBtns[0].classList.add('active');
		contentBodyCards.setAttribute('data-layout', dataGrid);
	}

	if (document.documentElement.clientWidth < 335) {
		dataGrid = mobileLayoutBtns[1].getAttribute('data-grid');
		contentBodyCards.setAttribute('data-layout', dataGrid);
	}
}

// После загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
	changeGrid();
	layoutGrid();
});

// При изменения ширины страницы
window.addEventListener('resize', function () {
	changeGrid();
	layoutGrid();
});
/*==================================================================*/



