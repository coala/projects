angular.module('coala')
    .directive('students', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/students.html',
            controller: function ($scope, $rootScope) { },
            controllerAs: "gsoc"
        }
    }]);
