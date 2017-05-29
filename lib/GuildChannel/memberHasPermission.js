// GuildChannel.memberHasPermission(member, perm) - if a member has a permission in that channel
module.exports = Eris => {
	Eris.GuildChannel.prototype.memberHasPermission = (memberID, perm) => {
		if(memberID.id) memberID = memberID.id;
		return this.permissionOf(memberID).has(perm);
	};
};
