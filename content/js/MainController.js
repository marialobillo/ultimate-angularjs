function MainController($scope){
  $scope.name = 'Maria';
}

angular
  .module('app', [])
  .controller('MainController', MainController);
