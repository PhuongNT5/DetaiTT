(function () {
    'use strict';

    angular
        .module('app')
        .run(appRun)
        .config(authConfig);

    function authConfig($stateProvider) {
        $stateProvider
            .state('root', {
                url: '/',
            });
    }

    appRun.$inject = ['$state', '$rootScope', 'authService', 'routerHelper'];

    function appRun($state, $rootScope, authService, routerHelper) {

        var otherwise = '/404';

        routerHelper.configureStates(getStates(), otherwise);
        var a = authService.getToken();
        $rootScope.$on('$stateChangeStart', function (event, toState, fromState) {
            if (toState.url === '/login' || toState.url === '/register') {
                if (authService.login(null, 2)) {
                    event.preventDefault();
                    if (a.roles == 'admin') {
                        $state.go('admin');
                    } else {
                        $state.go('layout.homepage');
                    }
                }
            }
            else if (toState.url === '/admin') {
                if (!authService.login(null, 2)) {
                    event.preventDefault();
                    $state.go('auth.login');
                } else {
                    // console.log(a)
                    if (a.roles !== 'admin') {
                        event.preventDefault();
                        $state.go('layout.homepage');
                    }
                }
            }
            else if (toState.url === '/') {
                event.preventDefault();
                $state.go('layout.homepage');
            }

        });
    }

    function getStates() {
        return [{
            state: '404',
            config: {
                url: '/404',
                templateUrl: 'app/components/404/404.html',
                title: '404'
            }
        }];
    }
})();