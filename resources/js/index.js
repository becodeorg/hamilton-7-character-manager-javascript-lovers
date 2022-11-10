import {CharacterManager} from './classes/CharacterManager.js';

const url = `https://character-database.becode.xyz/`;
const characterManager = new CharacterManager(url);

const characters = characterManager.displayCharacters();

document.querySelector('.btn-create').addEventListener('click', () => {
	window.location.href = "characterCreation.html";
});

// document.body.addEventListener("keydown", (event) => {
// 	if (event.key == "Enter") {
// 		const inputSearch = document.querySelector('.input-search');
// 		const inputSearchValue = inputSearch.value;

// 		if (inputSearchValue) {
// 			console.log(inputSearchValue);
// 			inputSearch.style.border = "none";
// 			if (!inputSearchValue.includes('script')) {
// 				characterManager.displayCharacters(inputSearchValue);
// 				inputSearch.style.border = "none";
// 				inputSearch.value = "";
// 			}
// 			else
// 				inputSearch.style.border = "1px solid red";
// 		} else {
// 			inputSearch.style.border = "1px solid red";
// 		}
// 	}
// });