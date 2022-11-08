import {CharacterManager} from './classes/CharacterManager.js';
import {StringUtils} from './classes/StringUtils.js';

const url = `https://character-database.becode.xyz/`;
const characterManager = new CharacterManager(url);
const stringUtils = new StringUtils();

const currentURL = window.location.href;
let data = stringUtils.extractData(currentURL);

characterManager.displaySingleCharacter(data);