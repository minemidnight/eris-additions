class CodeBlock {
	constructor(content, lang) {
		this.content = content;
		this.lang = lang;

		return this;
	}

	content(content) {
		this.content = content;

		return this;
	}

	language(lang) {
		this.lang = lang;

		return this;
	}

	toString() {
		return `\`\`\`${this.lang || ""}\n${this.code || ""}\n\`\`\``;
	}
}

module.exports = Eris => {
	Eris.CodeBlock = CodeBlock;
};
