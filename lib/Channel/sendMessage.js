module.exports = Eris => {
	Eris.Channel.prototype.sendMessage = Eris.Channel.prototype.createMessage;
};
