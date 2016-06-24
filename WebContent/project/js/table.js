var userModule=angular.module('userModule',['ui.grid','ui.grid.edit','ui.grid.pagination']);
userModule.controller('userController',['$scope','$http','uiGridConstants',function($scope,$http,uiGridConstants){
	var paginationOptions = {
		    pageNumber: 1,
		    pageSize: 1,
		    sort: null
		  };
	$scope.gridOptions={
		paginationPageSizes: [1, 2, 3],
		paginationPageSize: 1,
		useExternalPagination: true,
	    useExternalSorting: true,
		enableSorting:true,
		//enableRowSelection: true,
		//enableFiltering :true,
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
	        $scope.gridApi = gridApi;
	        $scope.gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {
	            if (sortColumns.length == 0) {
	              paginationOptions.sort = null;
	            } else {
	              paginationOptions.sort = sortColumns[0].sort.direction;
	            }
	            getPage();
	          });
	        gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
	            paginationOptions.pageNumber = newPage;
	            paginationOptions.pageSize = pageSize;
	            getPage();
	          });
	    }
		
	}
	/*$http({
		method:'get',
		url:'data/userList.txt'
	}).then(function success(response){
		$scope.gridOptions1.data=response.data;
	},function failure(response){
		
	});*/
	var getPage = function() {
	    var url;
	    switch(paginationOptions.sort) {
	      case uiGridConstants.ASC:
	        url = 'data/userList.txt';
	        break;
	      case uiGridConstants.DESC:
	        url = 'data/userList.txt';
	        break;
	      default:
	        url = 'data/userList.txt';
	        break;
	    }
	 
	    $http.get(url)
	    .success(function (data) {
	      $scope.gridOptions.totalItems = 100;
	      var firstRow = (paginationOptions.pageNumber - 1) * paginationOptions.pageSize;
	      $scope.gridOptions.data = data.slice(firstRow, firstRow + paginationOptions.pageSize);
	    });
	  };
	 
	  getPage();
}]);