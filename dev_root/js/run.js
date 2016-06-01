(function() {
    'use strict';
    angular
        .module('PrepaidSEO')
        .run(runConfig);

    function runConfig($browser) {

        console.log('Run config');

        $browser.baseHref = function () {
            return '/';
        };
    }

})();