var app = angular.module('portfolio', ['ngRoute', 'ngResource', 'ngSanitize'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/projects/index.html',
      })
      .when('/projects/:id', {
        templateUrl: '/projects/show.html'
      })
      .otherwise({redirectTo: '/'});

});


app.config(function($httpProvider, $sceProvider) {
  var authToken = $("meta[name=\"csrf-token\"]").attr("content");
  return $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});
