angular.module('coala')
    .directive('mentors', ['$http', function ($http) {
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
                        angular.forEach($scope.projects, function (value, key) {
                            angular.forEach(value.mentors, function (value, key) {
                                self.mentorsList[value] = {
                                    "github_handle": value,
                                    "github_avatar_url": "https://avatars.githubusercontent.com/" + value
                                }
                            });
                        });
                    })

                $http.get('data/admins.json')
                    .then(function (res) {
                        admins = res.data
                        angular.forEach(admins, function (value, key) {
                            self.adminsList[value] = {
                                "github_handle": value,
                                "github_avatar_url": "https://avatars.githubusercontent.com/" + value

                            }
                        });
                    })

            },
            controllerAs: "gic"
        }
    }]);
