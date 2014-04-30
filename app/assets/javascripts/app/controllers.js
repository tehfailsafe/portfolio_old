app.controller('projects#index', function($scope, $location, Project, Tag) {
  $scope.projects = Project.query();
  $scope.tags = Tag.query();
  var grid = $('#isotope-container')

  $scope.selected = 'all';

  $scope.filterList = function(id, $index){
    id === 'all' ? grid.isotope({ filter: '*'}) : grid.isotope({filter: '.'+id})
    typeof $index !== 'undefined' ? $scope.selected = $index : $scope.selected = 'all';
  }

  $scope.selectItem = function(project){
    $location.path('/projects/' + project.id)
  }
});

app.controller('projects#show', function($scope, $routeParams, Project, $sce){
  $scope.trust = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  var project = Project.get({id: $routeParams.id});
  $scope.project = project;

  $scope.back = function(){
    history.back();
  }
});
