var ajax = angular.module('PeopleModule', []);
ajax.controller("StudentController", [ '$scope', '$http',
		function($scope, $http) {
			var url="js/data.txt";//不支持直接file的访问，支持http的方式，需要部署到服务器。chrome可以添加参数（--allow-file-access-from-files）
			$http.get(url).success(function (response){
				$scope.students=response;
			});
		} ]);
