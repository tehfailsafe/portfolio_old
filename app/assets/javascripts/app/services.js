angular.module('portfolio').factory('Project', function($resource){
  return $resource('/api/projects/:id');
});

angular.module('portfolio').factory('Tag', function($resource){
  return $resource('/api/tags/');
});
