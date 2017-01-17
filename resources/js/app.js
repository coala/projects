(function(){
	var app = angular.module('coala', []);

	app.controller('TabController', function () {
		this.tab = 1
		this.setTab = function (stab) {
			this.tab = stab
		}
		this.isSet = function (stab) {
			return this.tab == stab
		}
	})

	app.directive('home', function () {
		return {
			restrict: 'E',
			templateUrl: '/partials/tabs/home.html'
		}
	})

	app.directive('projects',  ['$http',  '$timeout' ,function ($http, $timeout) {
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


	app.directive('mentors', ['$http', function ($http) {
		return {
			restrict: 'E',
			templateUrl: '/partials/tabs/mentors.html',
			controller: function ($scope) {
				self = this
				self.mentorsList = []
			},
			controllerAs: "gic"
		}
	}]);

})();
