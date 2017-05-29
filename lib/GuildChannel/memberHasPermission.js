module.exports = Eris => {
	Eris.GuildChannel.prototype.memberHasPermission = function(memberID, perm) {
		if(memberID.id) memberID = memberID.id;
		return this.permissionsOf(memberID).has(perm);
	};
};
