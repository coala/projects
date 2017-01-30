(function(){
	var app = angular.module('coala', ['ngSanitize','btford.markdown', 'ngRoute']);

	app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/', {
				redirectTo: '/projects'
			}).
			when('/projects', {
				template: '<projects></projects>'
			}).
			when('/mentors', {
				template: '<mentors></mentors>'
			}).
			when('/faq', {
				template: '<faq></faq>'
			})
		}]);
	app.controller('TabController', function ($location) {
		this.tab = $location.path()
		this.setTab = function (stab) {
			this.tab = stab
			$location.path(stab);
		}
		this.isSet = function (stab) {
			return this.tab == stab
		}
	})

	app.directive('projects',  ['$http',  '$timeout', '$location', function ($http, $timeout, $location) {
		return {
			restrict: 'E',
			templateUrl: '/partials/tabs/projects.html',
			controller: function ($scope, $location) {
				self = this
				$scope.projectList = projects
				self.showProject = function (project) {
					
					$scope.currentProject = project

					$(document).ready(function () {
						$('.modal').modal('open');
					});

					mval = project["name"].split(' ').join('_').toLowerCase();
					$location.url('?project=' + mval)
				}

				$scope.search = function (arg) {
					$scope.searchText = arg
				}

				$scope.redirect = function (arg) {
					window.open(arg, '_blank');
				}

				$scope.updateLink = function () {
					$location.url($location.path());
				}

				$scope.projects_url_dict = {}
				
				angular.forEach($scope.projectList, function(value, key){
					value["url"] = value["name"].split(' ').join('_').toLowerCase();
					$scope.projects_url_dict[value["url"]] = key
				});

				var project_requested = $location.search().project; 
				if(project_requested){
					if(Object.keys($scope.projects_url_dict).indexOf(project_requested) > -1){
						self.showProject($scope.projectList[$scope.projects_url_dict[project_requested]])
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

	app.directive('faq',[ '$http', function ($http) {
		return {
			restrict: 'E',
			templateUrl: '/partials/tabs/faq.html',
			controller: function () {
				self = this
				self.faqs = faq
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
