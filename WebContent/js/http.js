angular.module('myApp', []).controller('httpController',
		[ '$scope','$http',function($scope,$http) {
			$scope.http={
				method:'GET',
				url:'http-hello.html'
			}
			$scope.fetch = function(method,url) {
				$http({
					method:$scope.http.method,
					url:$scope.http.url
				}).then(function(response){
					$scope.status=response.status;
					$scope.data=response.data;
				},function(response){
					$scope.status=response.status;
					$scope.data=response.data || "Request failed";
				});
			}
			$scope.updateModel=function(method,url){
				$scope.http.method=method;
				$scope.http.url=url;
			}
		} ]);