angular.module("Trip").controller("detailController", detailController);

function detailController(dataFactory, $routeParams) {
  const vm = this;
  const id = $routeParams.id;
  vm.header = "Trip detail";
  dataFactory.getOne(id).then(function (response) {
    vm.trip = response;
    console.log(response.data);
  });
  vm.delete = function (id) {
    dataFactory.deleteOne(id).then(function (response) {
      vm.trip = response;
      console.log(response.data);
    });
  };
}
