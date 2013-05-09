function Section(time, day, name) {
    this.name = name;
    this.time = time
    this.day = day;
    this.possibleSLs = new Array();
    this.finalSL = null;
};

Section.prototype.setFinalSL = function(sl) {
    this.finalSL = sl;
};

Section.prototype.getFinalSL = function() {
    return this.finalSL;
}

Section.prototype.unsetFinalSL = function() {
    this.finalSL = null;
};

Section.prototype.addPossibleSL = function(sl) {
    this.possibleSLs.push(sl);
};

Section.prototype.removePossibleSL = function(sl) {
    var index = this.possibleSLs.indexOf(sl);
    this.possibleSLs.remove(index)
};

Section.prototype.setTime = function(time) {
    this.time = time;
};

Section.prototype.setDay = function(day) {
    this.day = day;
};

Section.prototype.setName = function(name) {
    this.name = name;
};
