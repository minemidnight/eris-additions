module.exports = Eris => {
	Eris.Member.prototype.hasPermission = function(perm) {
		return this.permission.has(perm);
	};
};
