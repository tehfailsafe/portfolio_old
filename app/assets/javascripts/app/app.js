angular.module('portfolio', ['ngRoute', 'portfolio.controllers'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/projects.html',
        controller: 'ProjectsController'
      })
      .otherwise({redirectTo: '/projects.html'});
});


angular.module('portfolio.controllers', [])
  .controller('ProjectsController', function($scope) {
    $scope.foo = "bar";
    console.log("i am the contorller");
  });

