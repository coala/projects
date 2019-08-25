(function(){
    var app = angular.module('coala', ['ngSanitize','btford.markdown', 'ngRoute']);

    app.factory('Languages', function ($location) {
        langs = [{
            'name' : 'English',
            'code' : 'en'
        },
        {
            'name' : 'Bahasa',
            'code' : 'id'
        },
        {
            'name' : 'हिन्दी',
            'code' : 'hi'
        },
        {
            'name' : 'Romanian',
            'code' : 'ro'
        }];
        selected_language = JSON.parse(window.localStorage.getItem('lang')) || langs[0];

        return {
            setData: function (val) {
                angular.forEach(langs, function(v, k){
                    if (v.code == val){
                        window.localStorage.setItem('lang', JSON.stringify(v));
                        selected_language = v;
                    }
                });
            },
            getData: function () {
                return selected_language['code'];

            },
            getAllLanguages: function () {
                return langs;
            },
            getLanguageObject: function () {
                return selected_language;
            }
        }
    });

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/projects', {
                template: '<projects></projects>',
                reloadOnSearch: false
            }).
            when('/mentors', {
                template: '<mentors></mentors>'
            }).
            when('/faq', {
                template: '<faq></faq>'
            }).
            when('/students', {
                template: '<students></students>'
            }).
            otherwise({
                redirectTo: '/projects'
            });
    }]);

    app.controller('LanguageController', function ($scope, Languages) {
        $scope.langs = Languages.getAllLanguages();
        $scope.update = function () {
            Languages.setData($scope.language.code);
        }
        $scope.init_language = Languages.getLanguageObject();
        $scope.getLanguage = function () {
            $scope.init_language = Languages.getLanguageObject();
            $(document).ready(function(){
                $('select').material_select();
            })
            $scope.$evalAsync();
            return $scope.init_language;
        }
    })

    app.controller('NavController', function ($location) {
        this.view = $location.path()
        this.setView = function (stab) {
            this.view = stab
            $location.path(stab);
        }
        this.isSet = function (stab) {
            return $location.path() == stab
        }
    })

    app.filter('format_issue', function () {
        return function (value) {
            if (!value) return '';
            res = value.split('/');
            last = res.length - 1;
            return res.slice(3, last - 1).join('/') + '#' + res[last];
        };
    });

})();
