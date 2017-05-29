// Member.hasPermission(perm) - if a member has a permission
module.exports = Eris => {
	Eris.member.prototype.hasPermission = this.permission.has;
};
