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

// fonction asycnhrone
async function deleteCharacter() {
	// requête avec l'url de l'API + characters/ + id
}

document.querySelector('.btn-delete').addEventListener('click', () => {
	if (confirm("Do you really want to delete this character ?") == true) {
		// appel deleteCharacter()
	}
});