import { CharacterManager } from './Classes/CharacterManager.js';
import { StringUtils } from './Classes/StringUtils.js';
import { Character } from './Classes/Character.js';
import { DataUrlConverter } from './Classes/DataUrlConverter.js';

const url = `https://character-database.becode.xyz/`;
const currentURL = window.location.href;

const characterManager = new CharacterManager(url);
const stringUtils = new StringUtils();
const dataUrlConverter = new DataUrlConverter();

const id = stringUtils.extractData(currentURL);

const promise = characterManager.getCharacterPromiseByID(id);

