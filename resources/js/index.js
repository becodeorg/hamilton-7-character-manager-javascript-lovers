import {CharacterManager} from './classes/CharacterManager.js';

const url = `https://character-database.becode.xyz/`;
const characterManager = new CharacterManager(url);

const characters = characterManager.displayCharacters();

document.querySelector('.btn-create').addEventListener('click', () => {
	window.location.href = "characterCreation.html";
});

document.body.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		const inputSearch = document.querySelector('.input-search');
		const inputSearchValue = inputSearch.value;

		if (inputSearchValue) {
			console.log(inputSearchValue);
			inputSearch.style.border = "none";
			if (!inputSearchValue.includes('script')) {
				const main = document.querySelector('main');
				main.replaceChildren();
				for (let i = 0; i < characters.length; i++) {
					if (characters[i].getID == inputSearchValue) {
						const article = document.createElement('article');
						article.classList.add('card');
						main.appendChild(article);

						const img = document.createElement('img');
						img.classList.add('card__image');
						img.setAttribute('src', 'data:image/gif;base64,' + characters[i].image);
						article.appendChild(img);

						const h2 = document.createElement('h2');
						h2.classList.add('card__name');
						h2.append(characters[i].name);
						article.appendChild(h2);

						const pShortDesc = document.createElement('p');
						pShortDesc.classList.add('card__short-description');
						pShortDesc.append(characters[i].shortDescription);
						article.appendChild(pShortDesc);

						const pDesc = document.createElement('p');
						pDesc.classList.add('card__description');
						pDesc.append(characters[i].description);
						article.appendChild(pDesc);

						const button = document.createElement('button');
						button.classList.add('card_button');
						button.append('See character');
						button.addEventListener('click', () => {
							window.location.href = `singleCharacter.html?id=${characters[i].id}`;
						});
						article.appendChild(button);
					} 
					
					else if (characters[i].name.toLowerCase().includes(inputSearchValue.toLowerCase())) {
						const article = document.createElement('article');
						article.classList.add('card');
						main.appendChild(article);

						const img = document.createElement('img');
						img.classList.add('card__image');
						img.setAttribute('src', 'data:image/gif;base64,' + characters[i].image);
						article.appendChild(img);

						const h2 = document.createElement('h2');
						h2.classList.add('card__name');
						h2.append(characters[i].name);
						article.appendChild(h2);

						const pShortDesc = document.createElement('p');
						pShortDesc.classList.add('card__short-description');
						pShortDesc.append(characters[i].shortDescription);
						article.appendChild(pShortDesc);

						const pDesc = document.createElement('p');
						pDesc.classList.add('card__description');
						pDesc.append(characters[i].description);
						article.appendChild(pDesc);

						const button = document.createElement('button');
						button.classList.add('card_button');
						button.append('See character');
						button.addEventListener('click', () => {
							window.location.href = `singleCharacter.html?id=${characters[i].id}`;
						});
						article.appendChild(button);
					}
				}

				inputSearch.style.border = "none";
				inputSearch.value = "";
			}
			else
				inputSearch.style.border = "1px solid red";
		} else {
			inputSearch.style.border = "1px solid red";
		}
	}
});