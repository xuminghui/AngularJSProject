var ajax = angular.module('PeopleModule', []);
ajax.controller("StudentController", [ '$scope', '$http',
		function($scope, $http) {
			var url="js/data.txt";//可使用火狐最新版，不支持直接file的访问，支持http的方式，需要部署到服务器。chrome可以添加参数（--allow-file-access-from-files）
			//$http(config)
			console.log($http.defaults.headers.common);
			console.log($http.defaults.headers.post);
			console.log($http.defaults.headers.put);
			$http({
				method:'get',
				url:url
			}).then(function successCallBack(response){
				$scope.students=response.data;
				console.log(response.status);
				console.log(response.headers);
				console.log(response.statusText);
			},function errorCallBack(response){
				
			});
		} ]);
