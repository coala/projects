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

    app.directive('projects',  ['$http',  '$timeout', '$location', 'Languages', function ($http, $timeout, $location, Languages) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/projects.html',
            controller: function ($scope, $location, Languages) {
                self = this

                var mapping = {
                    '': 0,
                    'crowded': 1,
                    'in_progress': 2,
                    'completed': 3
                }

                $scope.sortOrder = function(project) {
                    return mapping[project.status];
                }

                $scope.getDefaultProjectsMetadata = function () {
                    $http.get('data/projects.liquid')
                        .then(function (res) {
                            $scope.projectList = res.data;
                            $scope.projectRequest();
                        })
                }

                $scope.lang = Languages.getData();

                $scope.getDefaultProjectsMetadata();

                $scope.$watch( function () {
                    return Languages.getData();
                }, function () {
                    $scope.setLanguage(Languages.getData());
                }, true);


                $scope.setLanguage = function (val) {
                    $scope.lang = val;
                    $scope.updateProjects();
                }

                $scope.updateProjects = function () {
                    if ($scope.lang != 'en') {
                        $http.get('data/locale/'+$scope.lang+'/projects.json')
                            .then(function (res) {
                                $scope.projectList.map(function (project) {
                                    if (res.data[project.markdown]) {
                                        Object.keys(project).map(function (key) {
                                            if (res.data[project.markdown][key]) {
                                                project[key] = res.data[project.markdown][key]
                                            }
                                        });
                                    }
                                });

                                $scope.projectRequest();
                            });
                    } else {
                        $scope.getDefaultProjectsMetadata();
                        $scope.projectRequest();
                    }
                }

                function generateMarkdown() {

                    function setFromDefault() {
                        $http.get($scope.currentProject.content_url)
                            .then(function (res) {
                                $scope.currentProject.content = res.data
                            }, function() {
                                $scope.currentProject.content = 'No content'
                            });
                    }

                    if ($scope.lang != 'en') {
                        $http.get('data/locale/' + $scope.lang + '/projects/' + $scope.currentProject.markdown).then(function (res) {
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
                    $location.url('?project=' + mval + ( $scope.lang ? '&lang=' + $scope.lang : '' ))
                    $scope.$evalAsync();

                    generateMarkdown()
                }

                self.showProjectOnArrowClick = function (project) {

                    $scope.currentProject = project
                    mval = encodeURIComponent(project["name"].split(' ').join('_').toLowerCase());
                    $location.url('?project=' + mval + ( $scope.lang ? '&lang=' + $scope.lang : '' ))
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

                    var redirectTo = {
                      "integrate_pyflakes-enhanced_ast_into_coala_" : "integrate_pyflakes-enhanced_ast_into_coala"
                    };
                    $scope.projects_url_dict = {}
                    $scope.projects_url_list = Object.keys($scope.projects_url_dict);
                    angular.forEach($scope.projectList, function(value, key){
                        value["url"] = encodeURIComponent(value["name"].split(' ').join('_').toLowerCase());
                        $scope.projects_url_dict[value["url"]] = key
                    });

                    var project_requested = encodeURIComponent($location.search().project);
                    if(project_requested){
                        if(project_requested in redirectTo){
                          project_requested = redirectTo[project_requested]
                        }
                        if(Object.keys($scope.projects_url_dict).indexOf(project_requested) > -1){
                            self.showProject($scope.projectList[$scope.projects_url_dict[project_requested]])
                        }
                    }
                }

                var search_requested = $location.search().q;
                if(search_requested){
                    $scope.searchText = search_requested
                }

            },
            controllerAs: 'lc'
        }
    }]);

    app.directive('faq',[ '$http', '$templateCache', function ($http, $templateCache, Languages) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/faq.html',
            controller: function ($scope, Languages) {
                $scope.lang = Languages.getData();

                $scope.getDefaultFAQMetadata = function () {
                    $http.get('data/faq.liquid')
                        .then(function (res) {
                            $scope.faqs = res.data;
                            $scope.generateMarkdown();
                        })
                }

                $scope.lang = Languages.getData();

                $scope.getDefaultFAQMetadata();

                $scope.$watch( function () {
                    return Languages.getData();
                }, function () {
                    $scope.setLanguage(Languages.getData());
                }, true);


                $scope.setLanguage = function (val) {
                    $scope.lang = val;
                    $scope.updateFAQ();
                }

                $scope.updateFAQ = function () {
                    if ($scope.lang != 'en') {

                        $http.get('data/locale/'+$scope.lang+'/faq.json')
                            .then(function (res) {
                                $scope.faqs.map(function (faq) {
                                    if (res.data[faq.markdown]) {
                                        Object.keys(faq).map(function (key) {
                                            if (res.data[faq.markdown]) {
                                                faq['question'] = res.data[faq.markdown]

                                            }
                                        });
                                    }
                                });
                                $scope.generateMarkdown();
                            });
                    } else {
                        $scope.getDefaultFAQMetadata();
                    }
                }

                $scope.generateMarkdown = function() {

                    if ($scope.lang != 'en') {
                        $scope.faqs.forEach(function (faq, key) {
                            $http.get('data/locale/' + $scope.lang + '/faq/' + faq.markdown)
                                .then(function (res) {
                                    $scope.faqs[key].answer = res.data
                                }, function (error) {
                                    $http.get($scope.faqs[key].url)
                                        .then(function (res) {
                                            $scope.faqs[key].answer = res.data;
                                        })
                                });
                        })
                    } else {
                        $scope.faqs.forEach(function (f, k) {
                            $http.get($scope.faqs[k].url)
                                .then(function (res) {
                                    $scope.faqs[k].answer = res.data
                                });
                        })
                    }
                }

            },
            controllerAs: 'toc'
        }
    }]);

    app.filter('format_issue', function () {
        return function (value) {
            if (!value) return '';
            res = value.split('/');
            last = res.length - 1;
            return res.slice(3, last - 1).join('/') + '#' + res[last];
        };
    });

    app.directive('mentors', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/mentors.html',
            controller: function ($scope, $rootScope) {
                self = this
                self.mentorsList = {}
                self.adminsList = {}

                $http.get('data/projects.liquid')
                    .then(function (res) {
                        $scope.projects = res.data.filter(project => project.status != "completed")
                        angular.forEach($scope.projects, function(value, key){
                            angular.forEach(value.mentors, function(value, key){
                                self.mentorsList[value] =  {
                                    "github_handle" : value,
                                    "github_avatar_url": "https://avatars.githubusercontent.com/" +value
                                }
                            });
                        });
                    })

                $http.get('data/admins.json')
                    .then(function (res) {
                        admins = res.data
                        angular.forEach(admins, function(value, key){
                            self.adminsList[value] = {
                                "github_handle" : value,
                                "github_avatar_url": "https://avatars.githubusercontent.com/" +value

                            }
                        });
                    })

            },
            controllerAs: "gic"
        }
    }]);

})();
