module.exports = Eris => {
	// Channel additions
	require("./lib/Channel/awaitMessages.js")(Eris);
	require("./lib/Channel/createCode.js")(Eris);
	require("./lib/Channel/createEmbed.js")(Eris);
	require("./lib/Channel/sendCode.js")(Eris);
	require("./lib/Channel/sendEmbed.js")(Eris);
	require("./lib/Channel/sendMessage.js")(Eris);

	// Client additions
	require("./lib/Client/createCode.js")(Eris);
	require("./lib/Client/createEmbed.js")(Eris);

	// GuildChannel additions
	require("./lib/GuildChannel/memberHasPermission.js")(Eris);

	// Member additions
	require("./lib/Member/bannable.js")(Eris);
	require("./lib/Member/hasPermission.js")(Eris);
	require("./lib/Member/hasRole.js")(Eris);
	require("./lib/Member/highestRole.js")(Eris);
	require("./lib/Member/kickable.js")(Eris);
	require("./lib/Member/punishable.js")(Eris);
	require("./lib/Member/roleObjects.js")(Eris);

	// Message additions
	require("./lib/Message/guild.js")(Eris);

	// Role additions
	require("./lib/Role/addable.js")(Eris);
	require("./lib/Role/higherThan.js")(Eris);

	// User additions
	require("./lib/User/createMessage.js")(Eris);
	require("./lib/User/sendMessage.js")(Eris);

	return Eris;
};
