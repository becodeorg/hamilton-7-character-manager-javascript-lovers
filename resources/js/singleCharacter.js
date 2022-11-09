import {CharacterManager} from './Classes/CharacterManager.js';
import {StringUtils} from './Classes/StringUtils.js';

const url = `https://character-database.becode.xyz/`;
const characterManager = new CharacterManager(url);
const stringUtils = new StringUtils();

const currentURL = window.location.href;
let data = stringUtils.extractData(currentURL);

characterManager.displaySingleCharacter(data);