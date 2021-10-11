angular.module("Trip").factory("dataFactory", dataFactory);

function dataFactory($http) {
  return {
    getAll: getAll,
    getOne: getOne,
    deleteOne: deleteOne,
  };

  function deleteOne(id) {
    return $http
      .delete("/api/trip/" + id)
      .then(complete)
      .catch(failed);
  }
  function getOne(id) {
    return $http
      .get("/api/trip/" + id)
      .then(complete)
      .catch(failed);
  }

  function getAll(offset) {
    console.log(offset);
    return $http
      .get("/api/trip?offset=" + offset)
      .then(complete)
      .catch(failed);
  }
  function complete(response) {
    console.log(response.data);
    return response.data;
  }
  function failed() {
    return "failed";
  }
}
