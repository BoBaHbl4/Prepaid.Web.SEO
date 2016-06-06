(function() {
    'use strict';
    angular
        .module('PrepaidSEO')
        .run(runConfig);

    function runConfig($browser, $rootScope, $state, $stateParams) {

        console.log('Run config');

        $browser.baseHref = function () {
            return '/';
        };

        $rootScope.langArray = [
            {
                langName: 'English',
                langId: 'eng'
            },
            {
                langName: 'Deutsch',
                langId: 'de'
            },
            {
                langName: 'Русский',
                langId: 'ru'
            }
        ];
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

    }

})();