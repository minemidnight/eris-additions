class Embed {
	constructor(data = {}) {
		this.fields = [];
		Object.assign(this, data);

		return this;
	}

	author(name, icon, url) {
		this.author = { name, icon_url: icon, url };

		return this;
	}

	color(color) {
		this.color = color;

		return this;
	}

	description(desc) {
		this.description = desc.toString().substring(0, 2048);

		return this;
	}

	field(name, value, inline = false) {
		if(this.fields.length >= 25) return this;
		else if(!name) return this;
		else if(!value) return false;
		this.fields.push({ name: name.toString().substring(0, 256), value: value.toString().substring(0, 1024), inline });

		return this;
	}

	file(file) {
		this.file = file;

		return this;
	}

	footer(text, icon) {
		this.footer = { text: text.toString().substring(0, 2048), icon_url: icon };

		return this;
	}

	image(url) {
		this.image = { url };

		return this;
	}

	timestamp(time = new Date()) {
		this.timestamp = time;

		return this;
	}

	title(title) {
		this.title = title.toString().substring(0, 256);

		return this;
	}

	thumbnail(url) {
		this.thumbnail = { url };

		return this;
	}

	url(url) {
		this.url = url;

		return this;
	}
}

module.exports = Eris => {
	Eris.Embed = Embed;
};
