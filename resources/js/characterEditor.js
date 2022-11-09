import { CharacterManager } from './Classes/CharacterManager.js';
import { StringUtils } from './Classes/StringUtils.js';
import { Character } from './Classes/Character.js';

const url = `https://character-database.becode.xyz/`;
const characterManager = new CharacterManager(url);
const stringUtils = new StringUtils();

const currentURL = window.location.href;
const id = stringUtils.extractData(currentURL);

const promise = characterManager.getCharacterPromiseByID(id);

const img = document.querySelector('.card__image');
const uploadImg = document.querySelectorAll('.edit-card__image');
const name = document.querySelector('.edit-card__name');
const shortDesc = document.querySelector('.edit-card__short-description');
const desc = document.querySelector('.edit-card__description');

promise.then(data => {

	img.setAttribute('src', 'data:image/gif;base64,' + data.image);
	name.setAttribute('value', data.name);
	shortDesc.setAttribute('value', data.shortDescription);
	desc.append(data.description);
});

document.querySelector('.btn-save').addEventListener('click', () => {
	// 
});