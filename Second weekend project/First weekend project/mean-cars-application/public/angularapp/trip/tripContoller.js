angular.module("Trip").controller("TripController", TripController);

function TripController(dataFactory) {
  const vm = this;
  vm.header = "Trips List";
  vm.offset = 0;

  vm.getAll = function (offset) {
    dataFactory.getAll(offset).then(function (response) {
      vm.trip = response;
      console.log(response);
    });
  };
  vm.pre = function () {
    vm.offset -= 5;

    if (vm.offset < 0) {
      vm.offset = 0;
    }
    vm.getAll(vm.offset);
  };
  vm.next = function () {
    vm.offset += 5;

    vm.getAll(vm.offset);
    if (vm.trip.length === 0) {
      vm.offset = 0;
      vm.getALL(vm.offset);
    }
    console.log("previous");
  };

  vm.getAll(vm.offset);
}
