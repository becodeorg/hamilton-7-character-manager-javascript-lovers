import { CharacterManager } from './Classes/CharacterManager.js';

const url = `https://character-database.becode.xyz/`;
const characterManager = new CharacterManager(url);

document.querySelector('.btn-create').addEventListener('click', () => {
	window.location.href = "characterCreation.html";
});

const characters = characterManager.displayCharacters();

const inputSearch = document.querySelector('.input-search');

inputSearch.addEventListener('input', () => {
	const inputSearchValue = inputSearch.value;
	
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
				h2.classList.add('card__name--height');
				h2.append(characters[i].name);
				article.appendChild(h2);
	
				const pShortDesc = document.createElement('p');
				pShortDesc.classList.add('card__short-description');
				pShortDesc.classList.add('.card__short-desc--height');
				pShortDesc.append(characters[i].shortDescription);
				article.appendChild(pShortDesc);
	
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
				h2.classList.add('card__name--height');
				h2.append(characters[i].name);
				article.appendChild(h2);
	
				const pShortDesc = document.createElement('p');
				pShortDesc.classList.add('card__short-description');
				pShortDesc.classList.add('.card__short-desc--height');
				pShortDesc.append(characters[i].shortDescription);
				article.appendChild(pShortDesc);
	
				const button = document.createElement('button');
				button.classList.add('card_button');
				button.append('See character');
				button.addEventListener('click', () => {
					window.location.href = `singleCharacter.html?id=${characters[i].id}`;
				});
				article.appendChild(button);
			}
		}
	}
});