var userInfoModel = angular.module('UserInfoModule', []);
userInfoModel.controller('UserInfoCtrl', [ '$scope', function($scope) {
	$scope.color = 'red';
	$scope.isWarning = false;
	$scope.isError = false;
	$scope.textContent = '切换颜色';
	$scope.userInfo = {
		email : '2534@qq.com',
		password : 'safsdfa',
		autoLogin : true
	}
	$scope.getFormData = function() {
		console.log($scope.userInfo);
	}
	$scope.setFormData = function() {
		$scope.userInfo = {
			email : '1111',
			password : '2222',
			autoLogin : false
		};
	}
	$scope.resetFormData = function() {
		$scope.userInfo = {
			email : '2534@qq.com',
			password : 'safsdfa',
			autoLogin : true
		};
	}
	$scope.setColor = function() {
		$scope.color = 'green';
	}
	$scope.switchColor = function() {
		if ($scope.userInfo.autoLogin) {
			$scope.isWarning = true;
			$scope.isError = false;
			$scope.textContent = 'isWarning';
		} else {
			$scope.isError = true;
			$scope.isWarning = false;
			$scope.textContent = 'isError';
		}

	}

} ])
