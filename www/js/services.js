angular.module('starter.services', ['ngResource'])

.factory('Recipe', function($resource) {
  return $resource('http://thebrewersbarrel.com/recipes/:id.json');
});
