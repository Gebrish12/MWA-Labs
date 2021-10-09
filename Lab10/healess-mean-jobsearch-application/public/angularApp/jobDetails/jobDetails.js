
angular.module("JobSearch").controller("JobDetailsController",JobDetailsController);

function JobDetailsController (dataFactory,$routeParams){
     const vm = this;
     const jobID = $routeParams.jobID;
    dataFactory.getJobDetails(jobID).then(function(response){
           vm.jobs = response;
    })
}