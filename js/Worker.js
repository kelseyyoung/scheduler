function Worker(name) {
    this.name = name;
    this.isFinal = false;
    this.possibleTimeslots = Array();
    this.finalTimeslot = null;
};

Worker.prototype.setName = function(name) {
    this.name = name;
};

Worker.prototype.getName = function(name) {
    return this.name;
};

Worker.prototype.setIsFinal = function(isFinal) {
    this.isFinal = isFinal;
};

Worker.prototype.setFinalTimeslot = function(t) {
  this.finalTimeslot = t;
};

Worker.prototype.removePossibleTimeslot = function(t) {
    var index = this.possibleTimeslots.indexOf(t);
    this.possibleTimeslots.remove(index)
};

Worker.prototype.addPossibleTimeslot = function(t) {
    this.possibleTimeslots.push(t);
};
