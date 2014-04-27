app.controller('projects#index', function($scope, $location, Project) {
  $scope.projects = Project.query();
  

  imagesLoaded( document.querySelector('#isotope-container'), function( instance ) {
    setTimeout(function(){
      $('#isotope-container').isotope({
        itemSelector: '.project'
      });
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