module.exports = function(Eris) {
	Eris.Channel.prototype.sendEmbed = Eris.Channel.prototype.createEmbed;
};
