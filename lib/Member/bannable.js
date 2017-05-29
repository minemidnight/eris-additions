module.exports = function(Eris) {
	Object.defineProperty(Eris.Member.prototype, "bannable", {
		get: function() {
			const clientMember = this.guild.members.get(this.guild.shard.client.user.id);
			return clientMember.hasPermission("banMembers") && this.punishible(clientMember);
		}
	});
};
