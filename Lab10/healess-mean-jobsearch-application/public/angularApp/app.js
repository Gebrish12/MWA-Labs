
angular.module("JobSearch",['ngRoute']).config(config);

function config($routeProvider){
      $routeProvider.when("/",{
          templateUrl:"angularApp/main/main.html"
      })
      .when("/jobs",{
          templateUrl:"angularApp/jobs/jobs.html",
          controller:"jobController",
          controllerAs:"vm"
      })
      .when("/jobs/:jobID",{
          templateUrl:"angularApp/jobDetails/jobDetails.html",
          controller:"JobDetailsController",
          controllerAs:"vm"
      })
}