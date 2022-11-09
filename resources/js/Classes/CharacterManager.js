import { StringUtils } from './StringUtils.js';
import { Character } from './Character.js';

export class CharacterManager {
	
	constructor(url) {
		this.url = url;
	}

	async getCharactersPromise() {
		const response = await fetch(`${this.url}characters`);
		const promise = await response.json();

		return promise;
	}

	async getCharacterPromiseByName(name) {
		try {
			const response = await fetch(`${this.url}characters?name=${name}`);
		} catch (error) {
			console.log(error);
			this.getCharacterPromiseByID(name);
		} finally {
			const response = await fetch(`${this.url}characters?name=${name}`);
			const promise = await response.json();

			return promise;
		}
	}

	async getCharacterPromiseByID(id) {
		try {
			const response = await fetch(`${this.url}characters/${id}`);
		} catch (error) {
			console.log(error);
		} finally {
			const response = await fetch(`${this.url}characters/${id}`);
			const promise = await response.json();

			return promise;
		}
	}

	displaySingleCharacter(id) {
		console.log("test");
		window.location.href = `singleCharacter.html?id=${id}`;
	}

	displayCharacters() {
		const main = document.querySelector('main');
		const promise = this.getCharactersPromise();
		const characters = [];

		promise.then(data => {
			for (let i = 0; i < data.length; i++) {
				const character = new Character(data[i].id, data[i].name, data[i].shortDescription, data[i].description, data[i].image);
				characters.push(character);

				const article = document.createElement('article');
				article.classList.add('card');
				main.appendChild(article);

				const img = document.createElement('img');
				img.classList.add('card__image');
				img.setAttribute('src', 'data:image/gif;base64,' + data[i].image);
				article.appendChild(img);

				const h2 = document.createElement('h2');
				h2.classList.add('card__name');
				h2.append(data[i].name);
				h2.addEventListener('click', () => {
					this.displaySingleCharacter(character.id);
				});
				article.appendChild(h2);

				const pShortDesc = document.createElement('p');
				pShortDesc.classList.add('card__short-description');
				pShortDesc.append(data[i].shortDescription);
				article.appendChild(pShortDesc);

				const pDesc = document.createElement('p');
				pDesc.classList.add('card__description');
				pDesc.append(data[i].description);
				article.appendChild(pDesc);
			}
		});

		return characters;
	}

	displayCharacter(id) {
		const promise = this.getCharacterPromiseByID(id);

		promise.then(data => {
			const img = document.querySelector('.card__image');
			const name = document.querySelector('.card__name');
			const shortDesc = document.querySelector('.card__short-description');
			const desc = document.querySelector('.card__description');

			img.setAttribute('src', '');
			name.innerHTML = '';
			shortDesc.innerHTML = '';
			desc.innerHTML = '';

			img.setAttribute('src', 'data:image/gif;base64,' + data.image);
			name.append(data.name);
			shortDesc.append(data.shortDescription);
			desc.append(data.description);
		});
	}
}