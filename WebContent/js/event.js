var app = angular.module('myApp', []);
app.controller('eventController',function($scope){
	$scope.text="为什么";
	$scope.dblClick=function(){
		$scope.$broadcast('to-child','i am parent');
		//alert('dblClick');
	}
	$scope.change=function(){ //模型改变才可以触发
		alert('change');
	}
	//具体参看：https://segmentfault.com/a/1190000002634554
})

app.controller('childEventController',function($scope){
	$scope.$on('to-child',function(d,data){
		alert(d.name);
		alert(data);
	})
});