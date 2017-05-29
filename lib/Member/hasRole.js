// Member.hasRole(role || role id) - if a member has a role
module.exports = Eris => {
	Eris.Member.prototype.hasRole = roleID => {
		if(roleID.id) roleID = roleID.id;
		return !!~this.roles.indexOf(roleID);
	};
};
