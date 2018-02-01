function MainController(){
  this.name = 'Maria';
}

angular
  .module('app', [])
  .controller('MainController', MainController);
