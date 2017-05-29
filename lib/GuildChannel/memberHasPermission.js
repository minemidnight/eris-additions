module.exports = Eris => {
	Eris.GuildChannel.prototype.memberHasPermission = (memberID, perm) => {
		if(memberID.id) memberID = memberID.id;
		return this.permissionOf(memberID).has(perm);
	};
};
