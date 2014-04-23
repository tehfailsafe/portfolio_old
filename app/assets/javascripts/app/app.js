var app = angular.module('portfolio', ['ngRoute', 'ngResource'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/projects.html',
        controller: 'ProjectsController'
      })
      .otherwise({redirectTo: '/'});
});


app.config(function($httpProvider) {
  var authToken = $("meta[name=\"csrf-token\"]").attr("content");
  return $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});
