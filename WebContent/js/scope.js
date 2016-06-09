var app = angular.module('myApp', []);
app.run(function($rootScope){
	$rootScope.rootProperty='rootProperty';
}).controller('parent',function($scope){
	$scope.parentProperty='parentProperty';
}).controller('child',function($scope){
	$scope.childProperty='childProperty';
});
