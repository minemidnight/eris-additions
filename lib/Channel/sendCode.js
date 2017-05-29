// Channel.sendCode(code, lang) - same as Channel.createCode
module.exports = Eris => {
	Eris.Channel.prototype.sendCode = Eris.Channel.prototype.createCode;
};
