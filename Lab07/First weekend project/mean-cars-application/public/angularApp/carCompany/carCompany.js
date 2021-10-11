angular
  .module("CarCompany")
  .controller("carCompanyController", carCompanyController);

function carCompanyController(dataFactory) {
  const vm = this;
  vm.title = "Welcome to our collection of cars from different companies";
  vm.offset = 0;

  vm.getAll = function (offset) {
    dataFactory.getAllCarCompany(offset).then(function (response) {
      vm.companies = response;
      console.log(response.data);
      //   const rate = parseInt(response[0].rating);

      //   vm.rating = new Array(rate);
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
    vm.offset += 3;
    vm.getAll(vm.offset);
    setTimeout(() => {
      if (vm.companies.length === 0) {
        vm.offset = 0;
        vm.getAll(vm.offset);
      }
    }, 30);
  };
  vm.getAll(vm.offset);

  ////////////////////////

  vm.addcompany = function () {
    const newcompany = {
      name: vm.newcompanyname,
      country: vm.newcompanycountry,
    };
    console.log(vm.newjobpostDate);
    //   if(vm.addJob.$valid){
    dataFactory.addOnecompany(newcompany).then(function () {
      console.log("company saved");
    });
  };
  vm.deleteCompany = function (id) {
    dataFactory.deleteOnecompany(id).then(function () {
      console.log("deleted successfully");
    });
  };
}
