export class StringUtils {
	constructor() {}

	extractData(url) {
		let data = "";

		data = url.substring(url.search(/\b=\b/) + 1);
		data = data.replace('%20', ' ');

		return data;
	}

	extractID(url) {
		return url.substring(url.search(/\b=\b/) + 1);
	}

	hasNumber(str) {
		return /\d/.test(str);
	}

	isID(data) {
		return (data.includes('-') || this.hasNumber(data)) ? true : false;
	}
}