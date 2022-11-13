import { CharacterManager } from './Classes/CharacterManager.js';
import { StringUtils } from './Classes/StringUtils.js';
import { Character } from './Classes/Character.js';
import { DataUrlConverter } from './Classes/DataUrlConverter.js';

const url = `https://character-database.becode.xyz/`;
const currentURL = window.location.href;

const characterManager = new CharacterManager(url);
const dataUrlConverter = new DataUrlConverter();

const displayedImage = document.querySelector('.card__image');
const image = document.querySelector('.input-image');

image.addEventListener('input', () => {
	displayedImage.setAttribute('src', image.files[0].name);
});

document.querySelector('.fa-solid').addEventListener('click', () => {
	window.location.href = 'index.html';
});

document.querySelector('.btn-create').addEventListener('click', () => {
	const name = document.querySelector('.create-card__name');
	const shortDesc = document.querySelector('.create-card__short-description');
	const desc = document.querySelector('.create-card__description');

	if (!image.files[0] || !name.value || !shortDesc.value || !desc.value) {
		alert("Form field missing. Please fill the whole form fields");
	} else {
		const file = image.files[0];
		const dataUrlPromise = dataUrlConverter.getDataUrl(file);

		dataUrlPromise.then(dataUrl => {
			const newCharacter = new Character(
				0,
				name.value,
				shortDesc.value,
				desc.value,
				dataUrl
			);

			characterManager.createCharacter(newCharacter);
			window.location.href = 'index.html';
			alert("Character created");
		});
	}
});