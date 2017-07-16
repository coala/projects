(function(){
    var app = angular.module('coala', ['ngSanitize','btford.markdown', 'ngRoute']);

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
            otherwise({
                redirectTo: '/projects'
                    });
        }]);
    app.controller('TabController', function ($location) {
        this.tab = $location.path()
        this.setTab = function (stab) {
            this.tab = stab
            $location.path(stab);
        }
        this.isSet = function (stab) {
            return $location.path() == stab
        }
    })

    app.directive('projects',  ['$http',  '$timeout', '$location', function ($http, $timeout, $location) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/projects.html',
            controller: function ($scope, $location) {
                self = this
                lang = $location.search().lang || window.localStorage.getItem('lang');
                $scope.projectList = projects

                function generateMarkdown() {
                    function setFromDefault() {
                        $http.get('data/projects/' + $scope.currentProject.markdown).then(function (res) {
                            $scope.currentProject.content = res.data
                        }, function() {
                            $scope.currentProject.content = 'No content'
                        });
                    }

                    if (lang) {
                        $http.get('data/locale/' + lang + '/projects/' + $scope.currentProject.markdown).then(function (res) {
                            $scope.currentProject.content = res.data
                        }, function () {
                            setFromDefault()
                        });
                    } else {
                        setFromDefault()
                    }
                }

                self.showProject = function (project) {

                    $scope.currentProject = project

                    $(document).ready(function () {
                        $('.modal').modal('open');
                    });

                    mval = encodeURIComponent(project["name"].split(' ').join('_').toLowerCase());
                    $location.url('?project=' + mval + ( lang ? '&lang=' + lang : '' ))
                    $scope.$evalAsync();

                    generateMarkdown()
                }

                self.showProjectOnArrowClick = function (project) {

                    $scope.currentProject = project
                    mval = encodeURIComponent(project["name"].split(' ').join('_').toLowerCase());
                    $location.url('?project=' + mval + ( lang ? '&lang=' + lang : '' ))
                                        $scope.$evalAsync();
                    generateMarkdown()
                }

                $scope.search = function (arg) {
                    $scope.searchText = arg
                }

                $scope.redirect = function (arg) {
                    window.open(arg, '_blank');
                }

                $scope.updateLink = function () {
                    $scope.currentProject = null;
                    $location.url($location.path());
                }

                $scope.encode_URI = function (project_name) {
                    return encodeURIComponent(project_name.split(' ').join('_').toLowerCase());
                }

                $scope.arrowPressed = function (e) {
                    if(e.keyCode == 37){
                        keyPressed = "left"
                                    $scope.moveToNext(keyPressed);
                    }
                    else if(e.keyCode == 39){
                        keyPressed = "right"
                                    $scope.moveToNext(keyPressed);
                    }

                }

                $scope.moveToNext = function (keyPressed) {
                            if($scope.currentProject){

                        total_projects = $scope.projectList.length
                        angular.forEach($scope.projectList, function(value, key){
                            if($scope.currentProject.name == value["name"]){
                                current_project_index = key
                            }
                        });

                        if(keyPressed == "left"){
                            if(current_project_index == 0){
                                self.showProjectOnArrowClick($scope.projectList[total_projects-1])
                            }else{
                                self.showProjectOnArrowClick($scope.projectList[--current_project_index])
                            }
                        }
                        if(keyPressed == "right"){
                            if(current_project_index == total_projects-1){
                                self.showProjectOnArrowClick($scope.projectList[0])
                            }else{
                                self.showProjectOnArrowClick($scope.projectList[++current_project_index])
                            }
                        }
                    }
                }

                $scope.projectRequest = function () {
                    $scope.projects_url_dict = {}
                    $scope.projects_url_list = Object.keys($scope.projects_url_dict);
                    angular.forEach($scope.projectList, function(value, key){
                        value["url"] = encodeURIComponent(value["name"].split(' ').join('_').toLowerCase());
                        $scope.projects_url_dict[value["url"]] = key
                    });

                    var project_requested = encodeURIComponent($location.search().project);
                    if(project_requested){
                        if(Object.keys($scope.projects_url_dict).indexOf(project_requested) > -1){
                            self.showProject($scope.projectList[$scope.projects_url_dict[project_requested]])
                        }
                    }
                }

                if (lang) {
                    $http.get('data/locale/'+lang+'/projects.json').then(function (res) {
                        projects.map(function (project) {
                            if (res.data[project.markdown]) {
                                Object.keys(project).map(function (key) {
                                    if (res.data[project.markdown][key]) {
                                        project[key] = res.data[project.markdown][key]
                                    }
                                });
                            }
                        });

                        $scope.projectRequest()
                    });
                } else {
                    $scope.projectRequest()
                }

                var search_requested = $location.search().q;
                if(search_requested){
                    $scope.searchText = search_requested
                }

            },
            controllerAs: 'lc'
        }
    }]);

    app.directive('faq',[ '$http', '$templateCache', function ($http, $templateCache) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/faq.html',
            controller: function () {
                self = this
                lang = window.localStorage.getItem('lang')
                self.faqs = faq

                self.setFromDefault = function (key) {
                    $http.get('data/faq/' + faq[key]).then(function (res) {
                        faq[key] = res.data;
                    }, function() {
                        faq[key] = 'No content';
                    });
                }

                if (lang) {
                    $http.get('data/locale/' + lang + '/faq.json').then(function (res) {
                        Object.keys(faq).map(function (title) {
                            if (res.data[faq[title]]) {
                                faq[res.data[faq[title]]] = faq[title];
                                delete faq[title];
                            }
                        });

                        Object.keys(faq).map(function (key) {
                            $http.get('data/locale/' + lang +'/faq/' + faq[key]).then(function (res) {
                                faq[key] = res.data;
                            }, function() {
                                self.setFromDefault(key)
                            });

                        });
                    });
                } else {
                    Object.keys(faq).map(function (key) {
                        self.setFromDefault(key)
                    });
                }
            },
            controllerAs: 'toc'
        }
    }]);

    app.filter('format_issue', function () {
        return function (value) {
            if (!value) return '';
            res = value.split('/')
            res = res[3] + '/' + res[4] + '#' + res[6]
            return res;
        };
    });

    app.directive('mentors', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/mentors.html',
            controller: function ($scope) {
                self = this
                self.mentorsList = {}
                self.adminsList = {}
                angular.forEach(projects, function(value, key){
                    angular.forEach(value.mentors, function(value, key){
                        self.mentorsList[value] =  {
                            "github_handle" : value,
                            "github_avatar_url": "https://avatars.githubusercontent.com/" +value
                        }

                    });
                });

                angular.forEach(admins, function(value, key){
                    self.adminsList[value] = {
                        "github_handle" : value,
                        "github_avatar_url": "https://avatars.githubusercontent.com/" +value

                    }
                });
            },
            controllerAs: "gic"
        }
    }]);

})();
