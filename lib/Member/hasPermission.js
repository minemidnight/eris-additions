module.exports = function(Eris) {
	Eris.Member.prototype.hasPermission = function(perm) {
		return this.permission.has(perm);
	};
};
