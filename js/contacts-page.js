/*======================= contacts-page ========================*/
//------------- Функционал спойлера -------------
let moreItemTitle = document.querySelector('.more-item__title');

moreItemTitle.onclick = function () {
	moreItemTitle.firstElementChild.classList.toggle('active');
	moreItemTitle.nextElementSibling.classList.toggle('active');
}

/*==================================================================*/



