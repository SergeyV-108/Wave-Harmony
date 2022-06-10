/*======================= delivery-page ========================*/
//------------- Функционал табов -------------
let deliveryPageTabs = document.querySelectorAll(".delivery-page__tab");
let deliveryPageLabels = document.querySelectorAll('.tab-delivery__label');

for (let deliveryPageLabel of deliveryPageLabels) {

	deliveryPageLabel.addEventListener("click", function () {
		if (window.innerWidth > 1240) {
			for (let deliveryPageTab of deliveryPageTabs) {
				deliveryPageTab.classList.remove('active');
			}
			for (let deliveryPageLabel of deliveryPageLabels) {
				deliveryPageLabel.classList.remove('active');
				deliveryPageLabel.lastElementChild.children[0].classList.remove('active');
			}
			this.classList.toggle('active');
			this.lastElementChild.children[0].classList.add('active');
			this.closest('.delivery-page__tab').classList.add('active');
		} else {
			this.classList.toggle('active');
			this.lastElementChild.children[0].classList.toggle('active');
			this.closest('.delivery-page__tab').classList.toggle('active');
		}
	});
}

document.addEventListener("DOMContentLoaded", function () {
	if (window.innerWidth > 1240) {
		document.querySelector('.tab-delivery__label').click();
	}
});

window.addEventListener("resize", function () {
	if (window.innerWidth > 1240) {
		document.querySelector('.tab-delivery__label').click();
	} 
});

//------------- Функционал спойлеров -------------
let contentTabsTitle = document.querySelectorAll('.content-tab__title');

for (let contentTabTitle of contentTabsTitle) {

	contentTabTitle.onclick = function () {

		let contentTabsTitleActive = document.querySelectorAll('.content-tab__title.active');

		this.classList.toggle('active');
		this.nextElementSibling.classList.toggle('active');
		this.parentElement.classList.toggle('active');

		for (let contentTabTitleActive of contentTabsTitleActive) {
			contentTabTitleActive.classList.remove('active');
			contentTabTitleActive.nextElementSibling.classList.remove('active');
			contentTabTitleActive.parentElement.classList.remove('active');
		}
	}
};
/*==================================================================*/



