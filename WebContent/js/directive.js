var app = angular.module('directive', []);
app.directive('myDirective',function() {
	return {
		restrict:'A',
		// 私有作用域,隔离作用域
		scope:{
			myUrl:'@',
			myText:'@'
		},
		template:'<a href="{{ myUrl }}">{{ myText }}</a>',
		replace:true  // 源码显示的时候，只显示template，不显示自定义标签
	};
});
app.directive('testDirective',function(){  //directive 在html中使用test-directiv 在js中使用驼峰
	return {
		link:function(scope,elements,attrs){
			elements[0].onkeyup=function(){
				alert(this.value);
				if(isNaN(this.value)||this.value<1||this.value>10){
					this.style.borderColor='red'; //html中式border-color  在js中使用驼峰borderColor
				}
				else{
					this.style.borderColor='';
				}
					
			};
		}
		
	}
});
app.directive('testTransclude',function(){
	return {
		restrict:'A',
		scope:{
			title:'@'
		},
		template:'<h1 class="header">这是：{{title}}</h1><div class="row" ng-transclude></div>',
		transclude:true
	}
});
