var app = angular.module('myApp', []);
app.controller('bindController',function($scope){
	$scope.name='testName';
	$scope.url='http://www.baidu.com';
	$scope.data=[{name:'name1'},{name:'name2'}];
	$scope.userEntity={name:'userName',password:'password'};
	$scope.showName=function(){
		alert('1111');
	}
}).directive('myDirective',function(){
	return {
		restrict:'E',
		scope:{
			myUrl:'@',
			myText:'@',
			myObject:'=',
			method:'&'
		},
		template:'<a href="{{ myUrl }}">{{myText}}</div>\
			<input type="text" ng-model="myObject"></input>\
			<button ng-click=method></button>'
	}
}).directive('myDirective2',function(){
	return {
		restrict:'E',
		scope:{
			case1:'='
		},
		template:'<div> 指令中的：{{ case1.name }}</div>'
	}
});
