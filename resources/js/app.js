(function(){
	var app = angular.module('coala', ['ngSanitize','btford.markdown']);

	var tabsDir = './partials/tabs/';

	app.controller('TabController', function () {
		this.tab = 1
		this.setTab = function (stab) {
			this.tab = stab
		}
		this.isSet = function (stab) {
			return this.tab == stab
		}
	})

	app.directive('projects',  ['$http',  '$timeout', '$location' ,function ($http, $timeout, $location) {
		return {
			restrict: 'E',
			templateUrl: tabsDir+'projects.html',
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
			templateUrl: tabsDir+'faq.html',
			controller: function () {
				self = this
				self.faqs = faq
		},
		controllerAs: 'toc'
	}
	}]);


 app.filter('format_desc', function () {
  return function (value) {
   if (!value) return '';
   var lastspace = value.indexOf('.');
   if (lastspace != -1) {
    if (value.charAt(lastspace-1) == ',') {
    	lastspace = lastspace - 1;
    }
    value = value.substr(0, lastspace);
   }
   return value;
  };
 });

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
			templateUrl: tabsDir+'mentors.html',
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
