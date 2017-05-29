module.exports = Eris => {
	Object.defineProperty(Eris.Member.prototype, "highestRole", {
		get: function() {
			if(this.roles.length === 0) return this.guild.roles.get(this.guild.id);
			else return this.rolesObjects.reduce((prev, role) => !prev || role.higherThan(prev) ? role : prev);
		}
	});
};
