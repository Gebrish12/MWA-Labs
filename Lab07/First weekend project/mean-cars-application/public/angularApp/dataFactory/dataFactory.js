angular.module("CarCompany").factory("dataFactory", dataFactory);

function dataFactory($http) {
  return {
    getAllCarCompany: getAll,
    getAllCars: getAllCars,
    addOnecar: addOnecar,
    addOnecompany: addOnecompany,
    deleteOnecompany: deleteOnecompany,
    deleteOnecar: deleteOnecar,
  };
  function deleteOnecar(companyID, carID) {
    return $http
      .delete("api/company/" + companyID + "/cars/" + carID)
      .then(complete)
      .catch(failed);
  }

  function deleteOnecompany(id) {
    return $http
      .delete("api/company/" + id)
      .then(complete)
      .catch(failed);
  }

  function addOnecompany(company) {
    return $http.post("api/company", company).then(complete).catch(failed);
  }
  function addOnecar(id, car) {
    return $http.post("api/company/" + id + "/cars", car);
  }
  function getAllCars(companyID) {
    return $http
      .get("api/company/" + companyID)
      .then(complete)
      .catch(failed);
  }
  function getAll(offset) {
    return $http
      .get("/api/company?offset=" + offset)
      .then(complete)
      .catch(failed);
  }
  function complete(response) {
    return response.data;
  }
  function failed(error) {
    return error.status;
  }
}
