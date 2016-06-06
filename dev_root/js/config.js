(function() {
    'use strict';
    angular
        .module('PrepaidSEO')
        .config(config);

    function config($stateProvider, $urlRouterProvider, cfpLoadingBarProvider, $locationProvider) {

        console.log('Config');

        // Loading Bar
        cfpLoadingBarProvider.spinnerTemplate = '' +
            '<div class="page-spinner"><i class="fa fa-spinner fa-pulse page-spinner-icon text-primary"></i></div>';

        $urlRouterProvider.otherwise('/eng/app-home/');

        $stateProvider
            .state('root',{
                url: '/:language',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: '/views/header.html'
                    },
                    'data-content':{
                        templateUrl: '/views/data-content.html'
                    },
                    'footer':{
                        templateUrl: '/views/footer.html'
                    }
                }
            })
            .state('root.home', {
                url: '/app-home/',
                controller: 'MainCtrl',
                views: {
                    'container@': {
                        templateUrl: '/index.html'
                    },
                    'state-content':{
                        templateUrl: '/views/index.state.html'
                    }
                }
            })
            .state('root.about', {
                url: '/app-about/',
                controller: 'MainCtrl',
                views: {
                    'container@': {
                        templateUrl: '/index.html'
                    },
                    'state-content':{
                        templateUrl: '/views/about.state.html'
                    }
                }
            })
            .state('root.contacts', {
                url: '/app-contacts/',
                controller: 'MainCtrl',
                views: {
                    'container@': {
                        templateUrl: '/index.html'
                    },
                    'state-content':{
                        templateUrl: '/views/contacts.state.html'
                    }
                }
            });

        $locationProvider.html5Mode({ enabled: true, requireBase: true });
    }

})();