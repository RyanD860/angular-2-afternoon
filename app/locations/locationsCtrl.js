angular
  .module("devmtnTravel")
  .controller("locationsCtrl", function($scope, mainSrvc) {
    mainSrvc.getTravelInfo().then(function(resp) {
      $scope.locations = resp.data;
    });
  });
