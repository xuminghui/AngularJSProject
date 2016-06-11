angular.module('app',[])
.controller('parseExpressCtrl', function($scope,$parse){
	$scope.person={
		name:'test'
	};
	$scope.name="aaaa";
	$scope.$watch('expr',function(newVal,oldVal,scope){
		console.log('show log');
		if(newVal!==oldVal){
			var parseFun=$parse(newVal);
			$scope.exprParsed=parseFun(scope);
		}
	});
});
