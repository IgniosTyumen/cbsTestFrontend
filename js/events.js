$(function () {
	let trackItems = $('.modal-area__track-filter--data-item');
	let areaItems = $('.modal-area__areas-filter--data-item');
	let dachaItems = $('.modal-area__dachas-filter--data-item');
	let chaletItems = $('.modal-area__chalets-filter--data-item');
	window.sumOfOffers = 0;
	trackItems.on("change", (event) => sumOfSelected(event));
	areaItems.on("change", (event) => sumOfSelected(event));
	dachaItems.on("change", (event) => sumOfSelected(event));
	chaletItems.on("change", (event) => sumOfSelected(event));


	let trackSearch = $('.modal-area__track-filter--search');
	let areaSearch = $('.modal-area__areas-filter--search');
	let dachaSearch = $('.modal-area__dachas-filter--search');
	let chaletSearch = $('.modal-area__chalets-filter--search');
	trackSearch.on("keyup", (event) => filerItems(event));
	areaSearch.on("keyup", (event) => filerItems(event));
	dachaSearch.on("keyup", (event) => filerItems(event));
	chaletSearch.on("keyup", (event) => filerItems(event));

	let buttonReset = $('.modal-area__form-btn--reset');
		buttonReset.on("click", ()=> resetChecks())

});


const sumOfSelected = (event) => {
	let container = event.currentTarget;
	let selectedOffers = parseInt(container.getAttribute("data-offers"), 10);
	let input = container.querySelector("input");
	if (input.checked) {
		window.sumOfOffers += selectedOffers;
		console.log(window.sumOfOffers);
	} else {
		window.sumOfOffers -= selectedOffers;
		console.log(window.sumOfOffers);
	}
};


const filerItems = (event) => {
	let input = event.currentTarget;
	let filterText = input.value;
	let parent = input.parentNode;
	let data = parent.querySelectorAll('.custom-control');
	if (filterText !== "") {
		for (let cou = 0; cou < data.length; cou++) {
			let name = data[cou].getAttribute("data-name");
			if (!name.includes(filterText)) {
				data[cou].classList.add('hidden');
			}
		}
	} else {
		for (let cou = 0; cou < data.length; cou++) {
			data[cou].classList.remove('hidden');
		}
	}
};

const resetChecks = () => {
	window.sumOfOffers = 0;
	console.log(0);
	let checkboxes = $('input:checkbox');
	for (let cou=0;cou<checkboxes.length;cou++){
		if (checkboxes[cou].checked){
			checkboxes[cou].checked=false;
		}
	}
};
