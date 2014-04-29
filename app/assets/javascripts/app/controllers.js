app.controller('projects#index', function($scope, $location, Project, Tag) {
  $scope.projects = Project.query();
  $scope.tags = Tag.query();


  $scope.filterList = function(id){
    // id === 0 ? $scope.activeTag = undefined : $scope.activeTag = id;
    console.log(id);
  } 

  $scope.selectItem = function(project){
    $location.path('/projects/' + project.id)
  }
});

app.controller('projects#show', function($scope, $routeParams, Project){
  $scope.project = Project.get({id: $routeParams.id})
});
