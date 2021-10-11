angular
  .module("CarCompany")
  .controller("RegisterController", RegisterController);
function RegisterController(dataFactory) {
  var vm = this;
  vm.register = function ($http) {
    var user = { username: vm.username, password: vm.password };
    if (!vm.username || !vm.password) {
      vm.err = "Please add a username and password.";
    } else {
      if (vm.password !== vm.passwordRepeat) {
        vm.err = "Please make sure the passwords match.";
      } else {
        dataFactory
          .adduser(user)
          .then(function (result) {
            console.log(result);
            vm.message = "Successful registration, please login.";
            vm.err = "";
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  };
}
