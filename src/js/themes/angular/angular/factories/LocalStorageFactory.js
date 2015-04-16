angular.module('app').factory("LocalStorageFactory", function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
    if (event.key === 'my-storage') {
      $rootScope.$apply();
    }
  });
  return {
    setData: function(key, val) {
      return  $window.localStorage && $window.localStorage.setItem(key, val);
    },
    getData: function(key) {
      return $window.localStorage && $window.localStorage.getItem(key);
    }
  };
});