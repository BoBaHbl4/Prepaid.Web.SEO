(function() {
    'use strict';

    angular
        .module('PrepaidSEO')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl (
        $scope,
        $state,
        $location,
        $rootScope,
        cfpLoadingBar,
        appConstant,
        getService) {

        console.log('Main controller');

        // Language definition

        // var setLangCurrent = function () {
        //
        //     $scope.langIdCurrent = null;
        //     $scope.langNameCurrent = null;
        //     $scope.locationPath = [];
        //
        //     $scope.locationPath = $location.path().split("/");
        //     $scope.langIdCurrent = $scope.locationPath[1];
        //     angular.forEach($rootScope.langArray, function(value){
        //         if ($scope.langIdCurrent == value.langId) {
        //             console.log(value.langId);
        //             $scope.langNameCurrent = value.langName;
        //             return $scope.langNameCurrent;
        //         }
        //     });
        // };
        //
        //setLangCurrent();

        $scope.langIdCurrent = null;
        $scope.langNameCurrent = null;
        $scope.locationPath = [];

        $scope.locationPath = $location.path().split("/");
        $scope.langIdCurrent = $scope.locationPath[1];
        angular.forEach($rootScope.langArray, function(value){
            if ($scope.langIdCurrent == value.langId) {
                console.log('loaded "' + value.langId + '"');
                $scope.langNameCurrent = value.langName;
                return $scope.langNameCurrent;
            }
        });

        // Set Url For Any "Data Get Service"
        var apiUrl = appConstant.API_URL;

        $scope.changeLanguage = function(language) {
            $state.go($state.current.name, {language: language});

            angular.forEach($rootScope.langArray, function(value){
                if (language == value.langId) {
                    console.log('switched to "' + value.langId +'"');
                    $scope.langNameCurrent = value.langName;
                    return $scope.langNameCurrent;
                }
            });
        }

    }

})();