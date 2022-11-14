import {CharacterManager} from './Classes/CharacterManager.js';
import {StringUtils} from './Classes/StringUtils.js';

const url = `https://character-database.becode.xyz/`;
const characterManager = new CharacterManager(url);
const stringUtils = new StringUtils();

const currentURL = window.location.href;
const id = stringUtils.extractData(currentURL);

characterManager.displayCharacter(id);

document.querySelector('.btn-update').addEventListener('click', () => {
	window.location.href = `characterEditor.html?id=${id}`;
});

document.querySelector('.fa-solid').addEventListener('click', () => {
	window.location.href = `index.html`;
});

document.querySelector('.btn-delete').addEventListener("click", () => {
    if (confirm("Are you sure to delete this character ?")) {
		characterManager.deleteCharacter(id);
		alert("Character deleted");
		window.location.href = `index.html`;
	}
});