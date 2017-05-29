module.exports = Eris => {
	Eris.Member.prototype.hasRole = function(roleID) {
		if(roleID.id) roleID = roleID.id;
		return !!~this.roles.indexOf(roleID);
	};
};
