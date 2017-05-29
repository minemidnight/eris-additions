module.exports = Eris => {
	Eris.Member.prototype.hasPermission = this.permission.has;
};
