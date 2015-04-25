angular.module('PowerApp', [])

.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
})

.controller('MainCtrl', function($scope, $http) {

  $scope.videos = [];

  $scope.getIframeSrc = function(src) {
    return 'https://www.youtube.com/embed/' + src;
  };

  $http.get('video.json').success(function (result) {
    $scope.videos = result;
  });

}); 