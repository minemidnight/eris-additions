module.exports = Eris => {
    Object.defineProperty(Eris.Member.prototype, "color", {
        get: function() {
            const roles = this.roleObjects.filter(r => r.color !== 0);
            if(roles.length == 0) return this.guild.roles.get(this.guild.id).color;
            else return roles.reduce((prev, role) => !prev || role.higherThan(prev) ? role : prev).color;
        }
    });
};

module.exports.dep = ["Role.higherThan", "Member.roleObjects"];
