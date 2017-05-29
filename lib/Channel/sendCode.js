module.exports = Eris => {
	Eris.Channel.prototype.sendCode = Eris.Channel.prototype.createCode;
};
