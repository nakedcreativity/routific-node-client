// Constructor for the PDP objects
function FixPdp() {
  this.data = {
    visits: {},
    fleet: {},
    solution: {},
    unserved: [],
    options: {}
  }
};

FixPdp.routingLongEndpoint = "/fix-pdp"

FixPdp.prototype.addVisit = function(id, visit) {
  this.data.visits[id] = visit;
}

FixPdp.prototype.addVehicle = function(id, vehicle) {
  this.data.fleet[id] = vehicle;
}

FixPdp.prototype.addOption = function(id, option) {
  this.data.options[id] = option;
}

FixPdp.prototype.addSolution = function(solution) {
  console.log(solution,'solution in addSolution');
  this.data.solution = solution;
}

FixPdp.prototype.addUnserved = function(id) {
  
  key = this.data.unserved.length;

  this.data.unserved[key] = id;
  
}

module.exports = FixPdp
