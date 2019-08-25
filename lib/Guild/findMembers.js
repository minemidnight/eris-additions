module.exports = Eris => {
    Eris.Guild.prototype.findMembers = function(query) {
        return this.members.filter(m => m.tag.toLowerCase().includes(query.toLowerCase()) || m.id === query.replace(/^<@!?(\d{16,20})>$/, '$1') ||
            m.effectiveName.toLowerCase().includes(query.toLowerCase()));
    };
};

module.exports.deps = ["User.tag", "Member.effectiveName"];
