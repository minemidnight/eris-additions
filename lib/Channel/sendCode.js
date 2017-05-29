module.exports = function(Eris) {
	Eris.Channel.prototype.sendCode = Eris.Channel.prototype.createCode;
};
