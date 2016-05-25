(function() {
    'use strict';
    angular
        .module('PrepaidSEO')
        .directive('apiErrorMessage', apiErrorMessage);

    function apiErrorMessage () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: '../views/api-error-message.html'
        };
    }

})();