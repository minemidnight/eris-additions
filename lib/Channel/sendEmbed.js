module.exports = Eris => {
	Eris.Channel.prototype.sendEmbed = Eris.Channel.prototype.createEmbed;
};
