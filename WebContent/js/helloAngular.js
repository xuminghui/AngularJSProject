var app = angular.module('myApp', []);
app.controller('HelloAngular',function($scope) {
	$scope.greeting={
		text:'Hello'
	};
	$scope.showName=function(){
		alert('111');
	}
});
app.directive("hello",function(){
	return {
		restrict:'E',
		template:'<div>Hi everyone!</div>',
		replace:true
	}
});
