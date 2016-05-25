(function() {
    'use strict';

    angular
        .module('PrepaidSEO')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl (
        $scope,
        $state,
        cfpLoadingBar,
        appConstant,
        getService) {

        console.log('Main controller');
        
        $scope.testItems = {};
        $scope.testItems = {
            seoItem1: 1,
            seoItem2: 2,
            seoItem3: 3
        };

        // Set Url For Any "Data Get Service"
        var apiUrl = appConstant.API_URL;

    }

})();