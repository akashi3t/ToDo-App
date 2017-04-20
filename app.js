var app = angular.module('simple',[]);
app.controller('index',function($scope){
	$scope.tasks = [{Text:'first task',status:false}];
	$scope.removeButton = true;
	$scope.removeMsg = '';
	$scope.todoAdd = function() {
		//$scope.removeButton = false;
		$scope.tasks.push({Text:$scope.addNewTask,status:false});
		$scope.addNewTask = "";
		$scope.removeMsg = '';
		$scope.removeButton = true;
	}
	$scope.removeTask =function(){
		var oldList = $scope.tasks;
		$scope.tasks = [];
		angular.forEach(oldList,function(t){
			if(!t.status) {
				$scope.tasks.push(t);
				
			}
			

		});
		if(!$scope.tasks.length){ 
			$scope.removeButton = false;
			$scope.removeMsg = "Great!!!! You don't have any pending tasks.";
		}
		
	}
    $scope.authorName = 'Akash Deep';  
	$scope.todoContent = "As its name implies, the To-do list on an article's talk page shows the list of improvements suggested for the article. It is created and formatted using the Todo template. The list is maintained by editors, writers, reviewers or readers like you as a way to focus your collaborative efforts. As such, they represent a tentative consensus that helps improve the efficiency of the editing process.";
});

 
