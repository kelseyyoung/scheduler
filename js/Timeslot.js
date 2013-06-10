function Timeslot(time, day, name) {
    this.name = name;
    this.time = time
    this.day = day;
    this.possibleWorkers = new Array();
    this.finalWorker = null;
};

//Overwrite Array remove
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

Timeslot.prototype.setFinalWorker = function(worker) {
    this.finalWorker = worker;
};

Timeslot.prototype.getFinalWorker = function() {
    return this.finalWorker;
}

Timeslot.prototype.unsetFinalWorker = function() {
    this.finalWorker = null;
};

Timeslot.prototype.addPossibleWorker = function(worker) {
    this.possibleWorkers.push(worker);
};

Timeslot.prototype.removePossibleWorker = function(worker) {
    var index = this.possibleWorkers.indexOf(worker);
    if (index >= 0) {
      this.possibleWorkers.remove(index)
    }
};

Timeslot.prototype.setTime = function(time) {
    this.time = time;
};

Timeslot.prototype.setDay = function(day) {
    this.day = day;
};

Timeslot.prototype.setName = function(name) {
    this.name = name;
};
