angular.module("CarCompany").factory("dataFactory",dataFactory);


function dataFactory($http){
     return{
         getAllCarCompany : getAll,
         getAllCars : getAllCars
     }
     function getAllCars(companyID){
          return $http.get("api/company/"+companyID).then(complete).catch(failed);   
     }
     function getAll(){
   return $http.get("/api/company").then(complete).catch(failed);
     }
     function complete(response){
         return response.data;
     }
     function failed(error){
         return  error.status;
     }
}
