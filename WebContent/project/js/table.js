var userModule=angular.module('userModule',['ui.grid','ui.grid.edit']);
userModule.controller('userController',['$scope','$http','uiGridConstants',function($scope,$http,uiGridConstants){
	$scope.gridOptions1={
		enableSorting:true,
		enableRowSelection: true,
		enableFiltering :true,
		//headerTemplate: 'headerTemplate.html',
		columnDefs:[
		     { field: 'userName',enableColumnMenu: false},
		     { field: 'name' },
		     { field: 'gender', enableSorting: false },
		     { field: 'age', enableSorting: false },
		     { field: 'birth', enableSorting: false },
		     { field: 'mail', enableSorting: false ,enableCellEdit:false},
		     { field: 'address', enableSorting: false ,enableFiltering :false}
		],
	    onRegisterApi: function( gridApi ) {
	        $scope.grid1Api = gridApi;
	    }
		
	}
	$scope.toggleGender=function(){
	    if( $scope.gridOptions1.data[2].gender === 'male' ) {
	        $scope.gridOptions1.data[2].gender = 'female';
	      } else {
	        $scope.gridOptions1.data[2].gender = '333';
	      };
	      $scope.grid1Api.core.notifyDataChange( uiGridConstants.dataChange.EDIT );
	}
	$http({
		method:'get',
		url:'data/userList.txt'
	}).then(function success(response){
		$scope.gridOptions1.data=response.data;
	},function failure(response){
		
	});
}]);