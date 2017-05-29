module.exports = Eris => {
	Eris.Member.prototype.hasRole = roleID => {
		if(roleID.id) roleID = roleID.id;
		return !!~this.roles.indexOf(roleID);
	};
};
