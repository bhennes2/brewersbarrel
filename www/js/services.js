angular.module('starter.services', ['ngResource'])

.factory('Recipe', function($resource) {
  return $resource('/api/post');
});
