import {StringUtils} from './StringUtils.js';

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
			console.log(`${this.url}characters?name=${name}`);
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
			console.log(`${this.url}characters/${id}`);
			const response = await fetch(`${this.url}characters/${id}`);
			const promise = await response.json();

			return promise;
		}
	}

	displayCharacters() {
		const main = document.querySelector('main');
		const promise = this.getCharactersPromise();

		promise.then(data => {
			for (let i = 0; i < data.length; i++) {
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
	}

	displaySingleCharacter(data) {
		const stringUtils = new StringUtils();

		const main = document.querySelector('main');
		const promise = stringUtils.isID(data) ? this.getCharacterPromiseByID(data) : this.getCharacterPromiseByName(data);
		
		promise.then(data => {
			console.log(data);
			
			// if (!data.name) {
			// 	console.log("error pass there");
			// 	return "ERROR: undifined";
			// }

			const cardImage = document.querySelector('.card__image');
			const cardName = document.querySelector('.card__name');
			const cardShortDescription = document.querySelector('.card__short-description');
			const cardDescription = document.querySelector('.card__description');

			cardImage.setAttribute('src', 'data:image/gif;base64,' + data.image);

			cardName.innerHTML = "";
			cardName.append(data.name);

			cardShortDescription.innerHTML = "";
			cardShortDescription.append(data.shortDescription);

			cardDescription.innerHTML = "";
			cardDescription.append(data.description);
		});
	}
}