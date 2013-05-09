function SL(name) {
    this.name = name;
    this.isFinal = false;
};

SL.prototype.setName = function(name) {
    this.name = name;
};

SL.prototype.setIsFinal = function(isFinal) {
    this.isFinal = isFinal;
};

SL.prototype.getName = function(name) {
    return this.name;
};
