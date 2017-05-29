module.exports = Eris => {
	Eris.User.prototype.sendMessage = Eris.Member.prototype.createMessage;
};
