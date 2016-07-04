var app = angular.module('myApp', [])
app.controller('myCtrl',function($scope,$location){
	
	$scope.showBookmark = [];
	
	$scope.addBookmark = function(){	
		var newid = $scope.showBookmark.length;
		newid++;
		
		$scope.errortext = '';
		if(!$scope.addUrl || !$scope.addTitle || !$scope.addTag)
		{return;}
		var addToArray=true;
		for(var i=0;i<$scope.showBookmark.length;i++)
		{
			if($scope.showBookmark[i].url===$scope.addUrl)
			{
				addToArray=false;
				$scope.errortext='THIS URL ALREADY EXIST';
			}
		}
		if(addToArray)
		{
			$scope.showBookmark.push(
				{id:newid, url:$scope.addUrl, title:$scope.addTitle, tag:$scope.addTag}
			);
		}
			
		
		
		
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