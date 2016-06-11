var app=angular.module('app',['ngMessages']);
app.controller('MainCtrl', MainCtrl);
function MainCtrl(){
	
}


app.directive('ngFocus',function(){
	return {
		restrict:'A',
		require:'ngModel',
		link:function(scope,element,attrs,ctrl){
			ctrl.$focusd=false;
			element.bind('focus',function(event){
				scope.$apply(function(){
					alert('focus');
					ctrl.$focused=true;
				});
			}).bind('blur',function(event){
				scope.$apply(function(){
					alert('blur');
					ctrl.$focused=false;
				});
			});
		}
	}
});
