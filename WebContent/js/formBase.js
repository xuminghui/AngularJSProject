var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
	$scope.user = {
		userName : 'userName',
		password : 'password',
		email : 'email',
		age:12,
		url:'http://www.baidu.com'
	};
	$scope.save = function() {
		alert('save');
	}
})
