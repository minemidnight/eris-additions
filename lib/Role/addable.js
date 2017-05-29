module.exports = function(Eris) {
	Object.defineProperty(Eris.Role.prototype, "addable", {
		get: function() {
			const clientMember = this.guild.members.get(this.guild.shard.client.user.id);
			return clientMember.hasPermission("banMembers") && clientMember.highestRole.higherThan(this);
		}
	});
};
