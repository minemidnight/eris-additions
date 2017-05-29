module.exports = Eris => {
	Eris.Member.prototype.hasPermission = perm => this.permission.has(perm);
};
