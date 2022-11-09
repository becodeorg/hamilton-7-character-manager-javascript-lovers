import { CharacterManager } from './Classes/CharacterManager.js';
import { StringUtils } from './Classes/StringUtils.js';
import { Character } from './Classes/Character.js';
import { DataUrlConverter } from './Classes/DataUrlConverter.js';

const url = `https://character-database.becode.xyz/`;
const currentURL = window.location.href;

const characterManager = new CharacterManager(url);
const stringUtils = new StringUtils();
const dataUrlConverter = new DataUrlConverter();

const id = stringUtils.extractData(currentURL);

const promise = characterManager.getCharacterPromiseByID(id);

const selectItems = () => {
	const img = document.querySelector('.card__image');
	const uploadImg = document.querySelector('.input-image');
	const name = document.querySelector('.edit-card__name');
	const shortDesc = document.querySelector('.edit-card__short-description');
	const desc = document.querySelector('.edit-card__description');

	return {
		img: img,
		uploadImg: uploadImg,
		name: name,
		shortDesc: shortDesc,
		desc: desc
	};
}

let selectedItems = selectItems();

promise.then(data => {
	selectedItems.img.setAttribute('src', 'data:image/gif;base64,' + data.image);
	selectedItems.name.setAttribute('value', data.name);
	selectedItems.shortDesc.setAttribute('value', data.shortDescription);
	selectedItems.desc.append(data.description);
});

selectedItems.uploadImg.addEventListener('input', () => {
	selectedItems.img.setAttribute('src', selectedItems.uploadImg.files[0].name);
});

document.querySelector('.btn-save').addEventListener('click', () => {
	selectedItems = selectItems();
	const file = selectedItems.uploadImg.files[0];
	let dataUrlPromise;

	if (file) {
		dataUrlPromise = dataUrlConverter.getDataUrl(file);

		dataUrlPromise.then(dataUrl => {
			const newCharacter = new Character(
				id,
				selectedItems.name.value,
				selectedItems.shortDesc.value,
				// TODO document.querySelector('iframe').contentWindow,
				dataUrl
			);
	
			console.log(newCharacter);
		});
	}
});