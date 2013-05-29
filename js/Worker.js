function Worker(name) {
    this.name = name;
    this.isFinal = false;
};

Worker.prototype.setName = function(name) {
    this.name = name;
};

Worker.prototype.setIsFinal = function(isFinal) {
    this.isFinal = isFinal;
};

Worker.prototype.getName = function(name) {
    return this.name;
};
