// Constructor for the PDP objects
function FixPdp() {
  this.data = {
    visits: {},
    fleet: {},
    solution: {},
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

FixPdp.prototype.addSolution = function(id, solution) {
  this.data.solution[id] = solution;
}

module.exports = FixPdp
