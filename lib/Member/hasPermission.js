module.exports = Eris => {
	Eris.member.prototype.hasPermission = this.permission.has;
};
