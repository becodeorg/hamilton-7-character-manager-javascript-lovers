export class DataUrlConverter {
	constructor() {}

	getBase64(file) {
		return new Promise(function(resolve) {
		  let reader = new FileReader();
		  reader.onloadend = function() {
			resolve(reader.result)
		  }
		  reader.readAsDataURL(file);
		})
	}

	async getDataUrl(file) {
		return this.getBase64(file);
	}
}