export class Character {
	constructor(id, name, shortDescription, description, image) {
		this.id = id;
		this.name = name;
		this.shortDescription = shortDescription;
		this.description = description;
		this.image = image;
	}

	get getID() {
		return this.id;
	}

	get getName() {
		return this.name;
	}

	get getShortDescription() {
		return this.shortDescription;
	}

	get getDescription() {
		return this.shortDescription;
	}

	get getImage() {
		return this.shortDescription;
	}

	get getID() {
		return this.id;
	}

	set changeID(newId) {
		this.id = newId;
	}

	set changeName(newName) {
		this.name = newName;
	}

	set changeShortDescription(newShortDescription) {
		this.shortDescription = newShortDescription;
	}

	set changeDescription(newDescription) {
		this.description = newDescription;
	}

	set changeImage(newImage) {
		this.image = newImage;
	}
}