angular.module('coala')
    .directive('faq', ['$http', '$templateCache', function ($http, $templateCache, Languages) {
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

                $scope.$watch(function () {
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

                        $http.get('data/locale/' + $scope.lang + '/faq.json')
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

                $scope.generateMarkdown = function () {

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
