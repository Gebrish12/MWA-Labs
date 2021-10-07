angular.module("CarCompany").controller("carCompanyController",carCompanyController);

function carCompanyController(dataFactory){
      const vm = this;
         vm.title = "welcome to our collection of cars from different companies";
         dataFactory.getAllCarCompany().then(function(response){
             vm.companies = response;

             console.log(response[0].name);
             const rate = parseInt(response[0].rating);
             
             vm.rating = new Array(rate);
             
         })
    
}