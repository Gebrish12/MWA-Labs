angular.module("CarCompany").controller("carsController", carsController);

function carsController(dataFactory, $routeParams) {
  const vm = this;
  const companyID = $routeParams.companyID;

  dataFactory.getAllCars(companyID).then(function (response) {
    vm.cars = response;
    console.log(vm.cars);
  });

  vm.addcar = function (companyID) {
    const newcar = {
      name: vm.newcarname,
      price: vm.newcarprice,
      mileage: vm.newcarmileage,
      date_production: vm.newcardate_production,
    };
    console.log(vm.newjobpostDate);
    //   if(vm.addJob.$valid){
    dataFactory.addOnecar(companyID, newcar).then(function () {
      console.log("car saved");
    });
  };

  vm.deletecar = function (companyID, carID) {
    dataFactory.deleteOnecar(companyID, carID).then(function () {
      console.log("car deleted successfully");
    });
  };
}
