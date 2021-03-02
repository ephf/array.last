Array.prototype.__defineGetter__('last', function() { return this[this.length - 1] });
module.exports = Array.prototype.last;