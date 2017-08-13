(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'angular-jwt',
        'ngStorage',
        'ngAnimate',
        'ngSanitize',
        'ngplus',
        'app.config',
        'app.services',
        'app.auth',
        'app.layout',
        'app.homepage',
        'app.program',
        'app.unit',
        'app.admin',
        'app.examination',
        'app.test',
        'app.result',

        'blocks.exception',
        'blocks.logger',
        'blocks.router',
        'infinite-scroll'
    ]);

})();