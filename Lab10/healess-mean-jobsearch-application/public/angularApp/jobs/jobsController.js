

angular.module("JobSearch").controller("jobController",jobController);

function jobController(dataFactory){
       const vm = this;
           vm.header = "Available Jobs";
       
 
        dataFactory.getAll().then(function(response){
            vm.jobs = response;
            console.log(response);
        })
       
       vm.addJob = function(){
           const newJob ={
               title : vm.newjobTitle,
               salary :vm.newjobsalary,
               description :vm.newjobDescription,
               postDate : vm.newjobPostDate,
               exprience : vm.newjobexprience,
               skills :vm.newjobSkills
           }
      

           if(vm.jobForm.$valid){
            dataFactory.addOneJob(newJob).then(function(response){
              vm.message="the job added successfully!";
            }).catch(function(error){
               vm.message="Error : the job is not added !";
            });
        }
          
          
       }
       vm.deleteJob = function(jobID){
           dataFactory.deleteJob(jobID).then(function (){
               console.log("deleted successfully");
           })

       }
       
      
}