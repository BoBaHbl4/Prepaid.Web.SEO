(function() {
    'use strict';
    angular
        .module('PrepaidSEO')
        .filter('someFilter', someFilter);

    function someFilter (){
        console.log('someFilter');
    }

})();