// Channel.sendMessage(content, file) - same as channel.createMessage
module.exports = Eris => {
	Eris.Channel.prototype.sendMessage = Eris.Channel.prototype.createMessage;
};
