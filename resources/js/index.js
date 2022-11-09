import {CharacterManager} from './classes/CharacterManager.js';

const url = `https://character-database.becode.xyz/`;
const characterManager = new CharacterManager(url);

characterManager.displayCharacters();

document.body.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		const inputSearch = document.querySelector('.input-search');
		const inputSearchValue = inputSearch.value;

		if (inputSearchValue) {
			console.log(inputSearchValue.value);
			inputSearch.style.border = "none";
			if (!inputSearchValue.includes('script')) {
				window.location.href = `./../../singleCharacter.html?data=${inputSearchValue}`;
				inputSearch.style.border = "none";
			}
			else
				inputSearch.style.border = "1px solid red";
		} else {
			inputSearch.style.border = "1px solid red";
		}
	}
});