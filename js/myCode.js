/* Setup the controller, included using the Angular module method, passing $scope as parameter */
var app = angular.module('toDoList', []); 
app.controller('toDoController', function($scope) {
    /* An array to hold the ToDoList item entries */
    $scope.toDoList = [];
    /* The current entry we are looking to add to the ToDoList */
    $scope.toDoItem = "";
    
    /* This function adds an entry to the ToDoList */
    $scope.toDoAdd = function() {
        /* Add the new ToDoList item along with its 'completed'status (initially false) */
        $scope.toDoList.push({toDoItem:$scope.toDoItem, completed:false});
        /* Reset $scope.toDoItem to empty after it's been pushed out to the $scope.toDoList array */
        $scope.toDoItem = "";
    };

    /* This function returns the number of items remaining on the ToDoList */
    $scope.toDoNotCompleted = function() {
        var num = 0;
        angular.forEach($scope.toDoList, function(item) {
          num += item.completed ? 0 : 1;
        });
        return num;
    };

    /* This function deletes all completed entries from the ToDoList */
    $scope.toDoDelete = function() {
        /* Make a copy of the $scope.toDoList array */
        var toDoListCopy = $scope.toDoList;
        /* Reset the $scope.toDoList array to empty */
        $scope.toDoList = [];
        /* Iterate through the copy of the $scope.toDoList array for each 'item' */
        angular.forEach(toDoListCopy, function(item) {
            /* If 'completed' status is false we push entry back out to $scope.toDoList array otherwise it's completed and removed */
            if (item.completed == false) {
                $scope.toDoList.push(item);
            }    
        });
    };

    /* This function deletes all entries from the ToDoList */
    $scope.toDoDeleteAll = function() {
        /* Here we simply reset the $scope.toDoList array to empty */
        $scope.toDoList = [];
    };
});