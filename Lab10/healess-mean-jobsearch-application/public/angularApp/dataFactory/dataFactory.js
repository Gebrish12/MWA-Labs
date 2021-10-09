angular.module("JobSearch").factory("dataFactory",dataFactory);

function dataFactory($http){

     return{
          getAll : getALL,
          getJobDetails  :getJobDetails,
          addOneJob : addOneJob,
          deleteJob :deleteJob
     
     };
     function deleteJob(jobID){
          return $http.delete("/api/job/"+jobID).then(complete).catch(failed);
     }
     function addOneJob(job){
       return $http.post("/api/job",job).then(complete).catch(failed);
     }
     function getJobDetails(jobID){
          return $http.get("api/job/"+jobID).then(complete).catch(failed);
     }
      function getALL(){
        return  $http.get("api/job").then(complete).catch(failed);
      };
      function complete(response){
           return response.data;
      }
      function failed (error){
           return error.status;
      }
     
}