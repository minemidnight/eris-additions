module.exports = function(Eris) {
	Eris.Channel.prototype.sendMessage = Eris.Channel.prototype.createMessage;
};
