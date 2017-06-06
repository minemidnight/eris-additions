module.exports = Eris => {
	Eris.Channel.prototype.sendEmbed = Eris.Channel.prototype.createEmbed;
};

module.exports.deps = ["Channel.createEmbed"];
