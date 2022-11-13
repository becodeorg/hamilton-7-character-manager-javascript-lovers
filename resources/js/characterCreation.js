import { CharacterManager } from './Classes/CharacterManager.js';
import { StringUtils } from './Classes/StringUtils.js';
import { Character } from './Classes/Character.js';
import { DataUrlConverter } from './Classes/DataUrlConverter.js';

const url = `https://character-database.becode.xyz/`;
const currentURL = window.location.href;

const characterManager = new CharacterManager(url);
const dataUrlConverter = new DataUrlConverter();

document.querySelector('.btn-create').addEventListener('click', () => {
	const name = document.querySelector('.create-card__name');
});