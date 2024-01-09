module.exports = (Eris) => {
    Object.defineProperty(Eris.User.prototype, "tag", {
        get: function() {
            return typeof this.username === "string"
                ? this.discriminator === "0"
                    ? this.username
                    : `${this.username}#${this.discriminator}`
                : null;
        }
    });
};
