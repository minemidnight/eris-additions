module.exports = Eris => {
	Object.defineProperty(Eris.Member.prototype, "kickable", {
		get: function() {
			const clientMember = this.guild.members.get(this.guild.shard.client.user.id);
			return clientMember.hasPermission("kickMembers") && this.punishable(clientMember);
		}
	});
};
