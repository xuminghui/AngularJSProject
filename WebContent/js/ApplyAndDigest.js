angular.module('myApp', []).controller('messageController',
		[ '$scope', function($scope, greeter) {
			$scope.getMessageWithApply = function() {
				setTimeout(function() {
					$scope.$apply(function() {
						$scope.messageWithApply = "Fetched after 3 seconds";
						console.log("Fetched after 3 seconds");
					});

				}, 2000);
			}
			$scope.getMessageWithNoApply = function() {
				setTimeout(function() {
					$scope.messageWithNoApply = "Fetched after 3 seconds";
					console.log("Fetched after 3 seconds");
				}, 2000);
			}
			$scope.getMessageWithApply();
			$scope.getMessageWithNoApply();
		} ]);