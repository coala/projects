(function(){
	var app = angular.module('coala', ['ngSanitize','btford.markdown', 'ngRoute']);

		app.config(['$routeProvider',
  	function($routeProvider) {
	   $routeProvider.
	   when('/projects', {
	       template: '<projects></projects>'
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
			return this.tab == stab
		}
	})

	app.directive('projects',  ['$http',  '$timeout', '$location' ,function ($http, $timeout, $location) {
		return {
			restrict: 'E',
			templateUrl: '/partials/tabs/projects.html',
			controller: function ($scope) {
				self = this
				$scope.projectList = projects
				self.showProject = function (project) {
					$(document).ready(function () {
						$('#modal1').modal('open');
					});
					$scope.currentProject = project
				 }

					$scope.search = function (arg) {
						$scope.searchText = arg
					}

					$scope.redirect = function (arg) {
						window.open(arg, '_blank');
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
