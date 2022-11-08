export class CharacterManager {
	
	constructor(url) {
		this.url = url;
	}

	async getCharactersPromise() {
		const response = await fetch(this.url + `characters`);
		const promise = await response.json();

		return promise;
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
}