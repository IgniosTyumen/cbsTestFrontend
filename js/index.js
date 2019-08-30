import {track, areas, chalets, dachas} from "./data.js";

const templateFiller = (className, templateId, data) => {
	let container = document.querySelector(`.${className}`);
	let areaData = document.querySelector(`#${templateId}`);
	for (let cou = 0; cou < data.length; cou++) {
		let inp = areaData.content.querySelector(`.${className}-check`);
		let newId = `${className}-check` + cou;
		inp.setAttribute("id", newId);
		let text = areaData.content.querySelector(`.${className}-text`);
		text.setAttribute("for", newId);
		text.textContent = data[cou].name;
		let offers = areaData.content.querySelector(`.${className}-offers`);
		offers.setAttribute("for", newId);
		offers.textContent = data[cou].offers;
		let divContainer = areaData.content.querySelector(`.${className}-item`);
		divContainer.setAttribute("data-offers", data[cou].offers);
		divContainer.setAttribute("data-name", data[cou].name);
		container.appendChild(document.importNode(areaData.content, true));
	}
};


console.log("started");
		//check template browser support
 if ('content' in document.createElement('template')) {
  templateFiller("modal-area__track-filter--data", "track-filter-template", track);
  templateFiller("modal-area__areas-filter--data", "areas-filter-template", areas);
  templateFiller("modal-area__dachas-filter--data", "dachas-filter-template", dachas);
  templateFiller("modal-area__chalets-filter--data", "chalets-filter-template", chalets);
 }

