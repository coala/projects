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
            when('/forms', {
                template: '<forms></forms>'
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

                $scope.message = {}
                $scope.projectFilterOptions = {}
                $scope.selectedStatusesList = []
                $scope.selectedTagsList = []
                $scope.selectedLevelsList = []
                $scope.selectedInitiativesList = []
                $scope.selectedCollabsList = []

                var mapping = {
                    '': 0,
                    'crowded': 1,
                    'in_progress': 2,
                    'completed': 3,
                    'disabled': 4
                }

                self.displayFilters = false
                $scope.toggleFiltersDisplay = function(){
                    self.displayFilters = !self.displayFilters
                    $('select').material_select();
                }

                $scope.sortOrder = function(project) {
                    return mapping[project.status];
                }

                $scope.getFiltersMetadata = function(){
                    $http.get('data/projects.liquid')
                        .then(function (res) {
                            var projects = res.data;
                            angular.forEach(projects, function(project){
                                if (project.status.length === 0){
                                    $scope.projectFilterOptions.status.options['NOT YET STARTED'] = 0
                                }
                                angular.forEach(project.status, function(state){
                                    $scope.projectFilterOptions.status.options[state.toUpperCase()] = mapping[state]
                                })
                                angular.forEach(project.tags, function(tag){
                                    $scope.projectFilterOptions.tags.options[tag] = tag
                                })
                                $scope.projectFilterOptions.difficulty.options[project.difficulty.toUpperCase()] = project.difficulty
                                angular.forEach(project.initiatives, function(initiative){
                                    $scope.projectFilterOptions.initiatives.options[initiative] = initiative
                                })
                                angular.forEach(project.collaborating_projects, function(collab){
                                    $scope.projectFilterOptions['collab-projects'].options[collab] = collab
                                })
                            })
                        })
                }

                $scope.initializeSelectorData = function(name, label, model_name){
                    $scope.projectFilterOptions[name] = {
                        label: label, model: model_name,options: {}
                    }
                }

                $scope.getAllFilters = function () {
                    $scope.initializeSelectorData('status', 'Status', 'selectedStatusesList')
                    $scope.initializeSelectorData('tags', 'Project Tags', 'selectedTagsList')
                    $scope.initializeSelectorData('difficulty', 'Difficulty Level', 'selectedLevelsList')
                    $scope.initializeSelectorData('initiatives', 'Initiatives', 'selectedInitiativesList')
                    $scope.initializeSelectorData('collab-projects', 'Collaborating Projects', 'selectedCollabsList')
                    $scope.getFiltersMetadata()
                }

                function filterProjectsByStatus(projects){
                    var selectedProjects = []
                    angular.forEach(projects, function(project){
                        if (project.status.length === 0 && !selectedProjects.includes(project)){
                            if (
                                ($scope.selectedStatusesList.includes("0") && project.mentors.length > 0) ||
                                ($scope.selectedStatusesList.includes("4") && project.mentors.length === 0)
                            ){
                                selectedProjects.push(project)
                            }
                        }
                        else {
                            angular.forEach(project.status, function (state) {
                                var mappedState = (mapping[state]).toString()
                                if ($scope.selectedStatusesList.includes(mappedState) && !selectedProjects.includes(project)) {
                                    selectedProjects.push(project)
                                }
                            })
                        }
                    })
                    return selectedProjects
                }

                function filterProjectsByTags(projects){
                    var selectedProjects = []
                    angular.forEach(projects, function(project){
                        angular.forEach(project.tags, function(tag){
                            if ($scope.selectedTagsList.includes(tag) && !selectedProjects.includes(project)){
                                selectedProjects.push(project)
                            }
                        })
                    })
                    return selectedProjects
                }

                function filterProjectsByDifficulty(projects){
                    var selectedProjects = []
                    angular.forEach(projects, function(project){
                        if ($scope.selectedLevelsList.includes(project.difficulty) && !selectedProjects.includes(project)){
                            selectedProjects.push(project)
                        }
                    })
                    return selectedProjects
                }

                function filterProjectsByInitiatives(projects){
                    var selectedProjects = []
                    angular.forEach(projects, function(project){
                        angular.forEach(project.initiatives, function(initiative){
                            if ($scope.selectedInitiativesList.includes(initiative) && !selectedProjects.includes(project)){
                                selectedProjects.push(project)
                            }
                        })
                    })
                    return selectedProjects
                }

                function filterProjectsByCollaboratingProjects(projects){
                    var selectedProjects = []
                    angular.forEach(projects, function(project){
                        angular.forEach(project.collaborating_projects, function(collab){
                            if ($scope.selectedCollabsList.includes(collab) && !selectedProjects.includes(project)){
                                selectedProjects.push(project)
                            }
                        })
                    })
                    return selectedProjects
                }

                $scope.setModelList = function(filter, list){
                    if (filter === 'status'){
                        $scope.selectedStatusesList = list
                    }
                    else if (filter === 'tags'){
                        $scope.selectedTagsList = list
                    }
                    else if (filter === 'difficulty'){
                        $scope.selectedLevelsList = list
                    }
                    else if (filter === 'initiatives'){
                        $scope.selectedInitiativesList = list
                    }
                    else {
                        $scope.selectedCollabsList = list
                    }
                }

                function anyFiltersApplied(){
                    return (
                        $scope.selectedStatusesList.length > 0 ||
                        $scope.selectedTagsList.length > 0 ||
                        $scope.selectedLevelsList.length > 0 ||
                        $scope.selectedInitiativesList.length > 0 ||
                        $scope.selectedCollabsList.length > 0
                    )
                }

                $scope.applyFilters = function(){
                    var filteredProjects = $scope.allProjects
                    if(anyFiltersApplied()){
                        if ($scope.selectedStatusesList.length > 0 && filteredProjects.length > 0) {
                            filteredProjects = filterProjectsByStatus(filteredProjects)
                        }
                        if ($scope.selectedTagsList.length > 0 && filteredProjects.length > 0) {
                            filteredProjects = filterProjectsByTags(filteredProjects)
                        }
                        if ($scope.selectedLevelsList.length > 0 && filteredProjects.length > 0) {
                            filteredProjects = filterProjectsByDifficulty(filteredProjects)
                        }
                        if ($scope.selectedInitiativesList.length > 0 && filteredProjects.length > 0) {
                            filteredProjects = filterProjectsByInitiatives(filteredProjects)
                        }
                        if ($scope.selectedCollabsList.length > 0 && filteredProjects.length > 0) {
                            filteredProjects = filterProjectsByCollaboratingProjects(filteredProjects)
                        }
                        if (filteredProjects.length === 0){
                            $scope.message.noProjectsFound = 'No projects found for your selected filters' +
                            ' options! Please try a different filter search combination.'
                            $scope.projectList = []
                        }
                        else {
                            $scope.projectList = filteredProjects
                        }
                    }
                    else {
                        $scope.projectList = filteredProjects
                    }
                }

                $scope.clearFilters = function(){
                    $scope.projectList = $scope.allProjects
                    var select = $('select')
                    select.prop('selectedIndex', 0)
                    select.material_select()
                }

                $scope.getDefaultProjectsMetadata = function () {
                    $http.get('data/projects.liquid')
                        .then(function (res) {
                            $scope.projectList = res.data;
                            $scope.allProjects = res.data;
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

                $scope.getAllFilters();
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

                $scope.getMentorsWebservicesURL = function(year){
                    return 'https://webservices.coala.io/mentors?year='+year+'&program=GSoC'
                }

                var today = new Date()
                if (today.getMonth() >= 6){
                    self.nextProgramYear = today.getFullYear() + 1
                }
                else {
                    self.nextProgramYear = today.getFullYear()
                }

                var mentorsWebservicesURL = $scope.getMentorsWebservicesURL(self.nextProgramYear);

                $http.get(mentorsWebservicesURL)
                    .then(function(response){
                        var mentors = response.data
                        angular.forEach(mentors, function (data) {
                            self.mentorsList[data.user.login] = {
                                "github_handle": data.user.login,
                                "github_avatar_url": "https://avatars.githubusercontent.com/" + data.user.login
                            }
                        });
                    })
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

    app.directive('forms', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/partials/tabs/forms.html',
            controller: function ($scope, $rootScope) {
                self = this
                self.formsList = []

                $http.get('https://webservices.coala.io/osforms')
                    .then(function (forms) {
                        self.formsList = forms.data
                    })
            },
            controllerAs: "osforms"
        }
    }]);

})();
