// Role.addable - if the bot can add role to a member
module.exports = Eris => {
	Object.defineProperty(Eris.Role.prototype, "addable", {
		get: () => {
			const clientMember = this.guild.members.get(this.guild.shard.client.user.id);
			return clientMember.hasPermission("banMembers") && clientMember.highestRole.higherThan(this);
		}
	});
};
