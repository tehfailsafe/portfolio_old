app.controller('projects#index', function($scope, $location, Project, $http, $q) {
  $scope.projects = Project.query();
  

  imagesLoaded( document.querySelector('#isotope-container'), function( instance ) {
    console.log('all images are loaded');
    
    setTimeout(function(){
      $scope.$emit('iso-init');
    }, 100)
  });

  $scope.filterList = function(id){
    id === 0 ? $scope.activeTag = undefined : $scope.activeTag = id;
  }

  $scope.selectItem = function(project){
    $location.path('/projects/' + project.id)
  }
});

app.controller('projects#show', function($scope, $routeParams, Project){
  $scope.project = Project.get({id: $routeParams.id})
});


app.controller('tags#index', function($scope, Tag){
  $scope.tags = Tag.query();
});