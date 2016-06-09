var app = angular.module('ngTest', []);
app.run(function($rootScope,$timeout){
	$rootScope.isDisabled=true;
	$timeout(function(){
		$rootScope.isDisabled=false;
		$rootScope.myHref="http://www.baidu.com";
		$rootScope.imgSrc="img/test.png";
		$rootScope.person={
			name:'Ari'
		};
		
		
	},5000);
}).controller('parentCtrl',function($scope){
	//$scope.value='123';//此处用对象，不要直接赋值，反模式；如果采用对象，则共享对象的引用
	$scope.someModel={
			somevalue:'123'
		};
	$scope.someAction=function(){
		$scope.someModel.somevalue='called Child';
	};
}).controller('childCtrl',function($scope){
	$scope.childAction=function(){
		$scope.someModel.somevalue='called parent';
	};
});