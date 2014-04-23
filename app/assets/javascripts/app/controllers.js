app.controller('ProjectsController', function($scope, Project) {
    $scope.projects = Project.query();
  });

