var peopleModule = angular.module('PeopleModule', []);
peopleModule.controller('PeopleController', [ '$scope', function($scope) {
	$scope.people = [ {
		name : 'Ari',
		city : 'San Francisco'
	}, {
		name : 'Erik',
		city : 'Seattle'
	} ]
} ])
