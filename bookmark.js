var app = angular.module('myApp', [])
app.controller('myCtrl',function($scope,$location){
	
	$scope.showBookmark = [];
	
	$scope.addBookmark = function(){	
		var newid = $scope.showBookmark.length;
		newid++;
		
		$scope.showBookmark.push(
			{id:newid, url:$scope.addUrl, title:$scope.addTitle, tag:$scope.addTag}
		);
	}

	$scope.removeBookmark = function(x){
		$scope.showBookmark.splice(x,1);
	}
	
	$scope.orderByNames = function(item){
		$scope.orderByList = item;
	}
	
	$scope.clearData = function(){
		$scope.addUrl   = "";
		$scope.addTitle = "";
		$scope.addTag   = "";
	}
	
});