function isEnabled(mod, options) {
	if(!options.enabled && !options.disabled) return true;
	else if(options.disabled && !~options.disabled.indexOf(mod)) return true;
	else if(options.enabled && ~options.enabled.indexOf(mod)) return true;
	else return false;
}

let loadedAdditions = [];
function addAddition(addition, Eris, options = {}) {
	if(!isEnabled(addition, options)) return;

	let mod = require(`./lib/${addition.replace(".", "/")}`);
	if(!~loadedAdditions.indexOf(addition)) {
		mod(Eris);
		loadedAdditions.push(addition);
	}

	if(mod.deps) mod.deps.forEach(dep => addAddition(dep, Eris));
}

const fs = require("fs");
const libdir = require("path").resolve(__dirname, "lib");
module.exports = (Eris, options = {}) => {
	let structs = fs.readdirSync(libdir);
	structs.forEach(struct => {
		let additions = fs.readdirSync(`${libdir}/${struct}/`);
		additions = additions.map(script => script.substring(0, script.length - 3));
		additions.forEach(addition => addAddition(`${struct}.${addition}`, Eris, options));
	});

	return Eris;
};
