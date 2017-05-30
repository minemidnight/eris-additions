function isEnabled(option, options) {
	if(!options.enabled && !options.disabled) return true;
	else if(options.disabled && !~options.disabled.indexOf(option)) return true;
	else if(options.enabled && ~options.enabled.indexOf(option)) return true;
	else return false;
}

module.exports = (Eris, options = {}) => {
	// Channel additions
	if(isEnabled("Channel.awaitMessages", options)) require("./lib/Channel/awaitMessages.js")(Eris);
	if(isEnabled("Channel.createCode", options)) require("./lib/Channel/createCode.js")(Eris);
	if(isEnabled("Channel.createEmbed", options)) require("./lib/Channel/createEmbed.js")(Eris);
	if(isEnabled("Channel.sendCode", options)) require("./lib/Channel/sendCode.js")(Eris);
	if(isEnabled("Channel.sendEmbed", options)) require("./lib/Channel/sendEmbed.js")(Eris);
	if(isEnabled("Channel.sendMessage", options)) require("./lib/Channel/sendMessage.js")(Eris);

	// Client additions
	if(isEnabled("Client.createCode", options)) require("./lib/Client/createCode.js")(Eris);
	if(isEnabled("Client.createEmbed", options)) require("./lib/Client/createEmbed.js")(Eris);

	// Eris additions
	if(isEnabled("Eris.CodeBlock", options)) require("./lib/Eris/CodeBlock.js")(Eris);
	if(isEnabled("Eris.Embed", options)) require("./lib/Eris/Embed.js")(Eris);

	// GuildChannel additions
	if(isEnabled("GuildChannel.memberHasPermission", options)) require("./lib/GuildChannel/memberHasPermission.js")(Eris);

	// Member additions
	if(isEnabled("Member.bannable", options)) require("./lib/Member/bannable.js")(Eris);
	if(isEnabled("Member.hasPermission", options)) require("./lib/Member/hasPermission.js")(Eris);
	if(isEnabled("Member.hasRole", options)) require("./lib/Member/hasRole.js")(Eris);
	if(isEnabled("Member.highestRole", options)) require("./lib/Member/highestRole.js")(Eris);
	if(isEnabled("Member.kickable", options)) require("./lib/Member/kickable.js")(Eris);
	if(isEnabled("Member.punishable", options)) require("./lib/Member/punishable.js")(Eris);
	if(isEnabled("Member.roleObjects", options)) require("./lib/Member/roleObjects.js")(Eris);

	// Message additions
	if(isEnabled("Message.guild", options)) require("./lib/Message/guild.js")(Eris);

	// Role additions
	if(isEnabled("Role.addable", options)) require("./lib/Role/addable.js")(Eris);
	if(isEnabled("Role.higherThan", options)) require("./lib/Role/higherThan.js")(Eris);

	// User additions
	if(isEnabled("User.createMessage", options)) require("./lib/User/createMessage.js")(Eris);
	if(isEnabled("User.sendMessage", options)) require("./lib/User/sendMessage.js")(Eris);

	return Eris;
};
