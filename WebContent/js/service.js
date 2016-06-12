angular.module('myApp', []).factory('greeter', function() {
	return {
		greet:function(msg){
			alert(msg);
		}
	}
}).controller('serviceController',['$scope','greeter',function($scope,greeter){
	$scope.sayHello=function(){
		greeter.greet('Hello');
	}
}]);