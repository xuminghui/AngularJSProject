
angular.module('myApp', []).value('url','js/data.txt').factory('helloService', ['$http','url',function($http,url) {
	return {
		getPersons:function(){
			return $http.get(url);
		}
	};
}]).controller(
		'serviceController',
		[ '$scope', '$timeout', 'helloService',
				function($scope, $timeout, helloService) {
					var timeout;
					$scope.$watch('username', function(newUsername) {
						//timeout表示一个promise，如果当前进程存在一个timeout，则取消，并按照下面代码再执行生成一个Promise;
						//然后延迟指定时间，处理function
						if (timeout){
							$timeout.cancel(timeout);
						}
							
						timeout = $timeout(function() {
							helloService.getPersons().then(function(response) {
								alert('获取查询结果');
								$scope.persons = response.data;
							}, function(response) {
								alert('error');
							});
						}, 2000);

					});
				} ]);