/*=========================== blog-page ============================*/
//--------------- Функционал фильтра карточек блогов ---------------
let filterBlogTitle = document.querySelector('.filter-blog__title');
let filterBlogBtns = document.querySelectorAll('.filter-blog__btn');
let itemsBlogItems = document.querySelectorAll(".items-blog__item");

if (document.documentElement.clientWidth < 760) {
	filterBlogTitle.addEventListener("click", function () {
		filterBlogTitle.nextElementSibling.classList.toggle('show');
	});
}

for (let filterBlogBtn of filterBlogBtns) {

	filterBlogBtn.addEventListener("click", function () {
		// кнопки 
		for (let filterBlogBtn of filterBlogBtns) {
			filterBlogBtn.classList.remove('active');
		}
		this.classList.add('active');

		// карточки 
		let itemData = filterBlogBtn.getAttribute("data-item");
		let currentItems = document.querySelectorAll(itemData);

		for (let itemsBlogItem of itemsBlogItems) {
			itemsBlogItem.classList.remove('show');

			for (let currentItem of currentItems) {
				currentItem.classList.add('show');
			}
		}
	});
}

// Вешается active на первый из header-blog__btn
document.querySelector('.filter-blog__btn').click();
/*==================================================================*/
