angular.module("CarCompany").directive("companyRating",CompanyRating);

function CompanyRating(){
    return{
        restrict: "E",
        templateUrl: "angularApp/company-rating/company-rating.html",
        bindToController:true,
        controller:"carCompanyController",
        controllerAs: "vm"
    }
}