(function(){
	var app = angular.module('coala', ['ngRoute','ngSanitize','btford.markdown'])

	app.controller('TabController', function () {
		this.tab = 1
		this.setTab = function (stab) {
			this.tab = stab
		}
		this.isSet = function (stab) {
			return this.tab == stab
		}
	})

	app.directive('projects',  ['$http', '$timeout' ,'$location', 
		function ($http, $timeout, $location) {
			return {
				restrict: 'E',
				templateUrl: '/partials/tabs/projects.html',
				controller: function ($scope) {
					self = this

					$scope.projectList = projects
					$scope.projects_url_dict = {}

					angular.forEach($scope.projectList, function(value, key){
						value["url"] = value["name"].split(' ').join('_').toLowerCase();
						$scope.projects_url_dict[value["url"]] = key
					});

				/* When project details view modal is closed
				this function is called from modal callback 
				from projects.html L100
				*/
				$scope.updateLink = function () {
					$location.path('');
				}

				/* This sets the clicked project as
				selected project, updates the url in
				browser and opens the modal */
				self.showProject = function (project) {
					$(document).ready(function () {
						mval = project["name"].split(' ').join('_').toLowerCase();
						$location.path('/' + mval)
						$('.modal').modal('open');
					});
					$scope.currentProject = project
				}

				/* If the url has parameters, then this section is
				executed. It checks whether url has a search query
				or is it project url. */ 
				var searchObject = $location.url();
				if(searchObject){
					searchObject = searchObject.split('=');
					if(searchObject.length == 2 && searchObject[0].indexOf('search') ==1){
						$scope.searchText = searchObject[1].replace(/%20/g, ' ')
					}else if(searchObject.length == 1){
						searchObject[0] = searchObject[0].substring(1, searchObject[0].length);

						if(Object.keys($scope.projects_url_dict).indexOf(searchObject[0]) >= -1){
							self.showProject($scope.projectList[$scope.projects_url_dict[searchObject[0]]])

						}
					}
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

	app.filter('format_name', function () {
		return function (value) {
			if(value){
				value  = value.split(' ').join('_').toLowerCase();
			}	
			return value;
		};
	});

	app.directive('mentors', ['$http', function ($http) {
		return {
			restrict: 'E',
			templateUrl: '/partials/tabs/mentors.html',
			controller: function ($scope) {
				self = this
				self.mentorsList = {}

				angular.forEach(projects, function(value, key){
					angular.forEach(value.mentors, function(value, key){
						self.mentorsList[value] =  {
							"github_handle" : value,
							"github_avatar_url": "https://avatars.githubusercontent.com/" +value
						}

					});
				});

			},
			controllerAs: "gic"
		}
	}]);

})();
