angular.module('portfolio').factory('Project', function($resource){
  return $resource('/api/projects/:id');
});