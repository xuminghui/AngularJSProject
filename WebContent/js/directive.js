var app = angular.module('directive', []);
app.directive('myDirective',function() {
	return {
		restrict:'A',
		//私有作用域,隔离作用域
		scope:{
			myUrl:'@',
			myText:'@'
		},
		template:'<a href="{{ myUrl }}">{{ myText }}</a>',
		replace:true  //源码显示的时候，只显示template，不显示自定义标签
	};
});

