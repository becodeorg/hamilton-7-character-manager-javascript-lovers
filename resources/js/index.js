import {Character} from './Classes/Character.js';
import {CharacterManager} from './Classes/CharacterManager.js';

const url = `https://character-database.becode.xyz/`;
const characterManager = new CharacterManager(url);

characterManager.displayCharacters();