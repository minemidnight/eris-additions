// Role.higherThan(role2) - if role is higher than role2
module.exports = Eris => {
	Eris.Role.prototype.higherThan = role2 => {
		if(this.position === role2.position) return role2.id - this.id > 0;
		else return this.position - role2.position > 0;
	};
};
