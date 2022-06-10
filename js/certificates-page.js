/*======================= certificates-page ========================*/
//------------- Функционал модального окна выбора даты -------------
// Открытие/закрытие окна -------------
let inputDate = document.getElementById('date');
let dateModal = document.getElementById('dateModal');
let closeModal = document.getElementById('closeModal');

inputDate.onclick = function () {
	dateModal.style.display = "flex";
	document.body.classList.add('lock');
}

closeModal.onclick = function () {
	dateModal.style.display = "none";
	document.body.classList.remove('lock');
}

window.onclick = function (event) {
	if (event.target == dateModal) {
		dateModal.style.display = "none";
		document.body.classList.remove('lock');
	}
}

// Функционал календаря в модальном окне -------------
function calendar(id, year, month) {
	var Dlast = new Date(year, month + 1, 0).getDate(),
		D = new Date(year, month, Dlast),
		DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
		DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
		week = '<tr>',
		month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

	// пустые клетки до первого дня текущего месяца
	if (DNfirst != 0) {
		for (var i = 1; i < DNfirst; i++) {
			week += '<td>';
		}
	} else { // если первый день месяца выпадает на воскресенье, то требуется 7 пустых клеток 
		for (var i = 0; i < 6; i++) {
			week += '<td>';
		}
	}
	// дни месяца
	for (var i = 1; i <= Dlast; i++) {
		if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
			week += '<td class="today">' + i; // сегодняшней дате можно задать стиль CSS
		} else {
			week += '<td>' + i;
		}
		if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) { // если день выпадает на воскресенье, то перевод строки
			week += '<tr>';
		}
	}
	// пустые клетки после последнего дня месяца
	for (var i = DNlast; i < 7; i++) {
		week += '<td> ';
	}
	document.querySelector('#calendar tbody').innerHTML = week;
	document.querySelector('#calendar thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
	document.querySelector('#calendar thead td:nth-child(2)').dataset.month = D.getMonth();
	document.querySelector('#calendar thead td:nth-child(2)').dataset.year = D.getFullYear();
	if (document.querySelectorAll('#calendar tbody tr').length < 6) {
		// чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
		document.querySelector('#calendar tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
	}

}
calendar("calendar", new Date().getFullYear(), new Date().getMonth());
selectDate();

// переключатель минус месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
	calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
	selectDate();
}
// переключатель плюс месяц
document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
	calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
	selectDate();
}

// Выбор даты -------------
let inputRadio = document.getElementById('radio');
let contentModalButton = document.querySelector(".content-modal__button");
let dateObj = {};

function selectDate() {
	let calendarDays = document.querySelectorAll('#calendar tbody tr td');
	let monthLowercase = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "агуста", "сентября", "октября", "ноября", "декабря"];
	let calendarMonthYear = document.querySelector('#calendar thead td:nth-child(2)');

	for (let calendarDay of calendarDays) {
		calendarDay.onclick = function () {
			inputRadio.checked = false;
			for (let calendarDay of calendarDays) {
				if (calendarDay.classList.contains('active')) {
					calendarDay.classList.remove('active');
				}
			}
			calendarDay.classList.add('active');
			calendarMonth = monthLowercase[calendarMonthYear.dataset.month];
			dateObj.youDate = this.innerHTML + ' ' + calendarMonth + ', ' + calendarMonthYear.dataset.year;
		}
	}
}

inputRadio.onclick = function () {
	let calendarDays = document.querySelectorAll('#calendar tbody tr td');
	for (let calendarDay of calendarDays) {
		calendarDay.classList.remove('active');
	}
}

contentModalButton.onclick = function (event) {
	event.preventDefault();
	dateModal.style.display = "none";
	document.body.classList.remove('lock');
	
	if (inputRadio.checked) {
		inputDate.value = 'Сразу после оплаты';
	} else {
		inputDate.value = dateObj.youDate;
	}
}
/*==================================================================*/




