module.exports = Eris => {
	Object.defineProperty(Eris.Member.prototype, "roleObjects", {
		get: () => this.roles.map(roleID => this.guild.roles.get(roleID))
	});
};
