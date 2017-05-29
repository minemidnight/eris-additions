// Channel.sendEmbed(embed) - same as Channel.createEmbed
module.exports = Eris => {
	Eris.Channel.prototype.sendEmbed = Eris.Channel.prototype.createEmbed;
};
