var app = angular.module('reddit');
app.controller('PostsController', function($scope, FirebaseService) {

	$scope.getPosts = function() {
		FirebaseService.getData().then(function(data){
			$scope.posts = data;
			// console.log($scope.posts)
		})
	}
	$scope.getPosts();

	$scope.addPost = function(post) {
		FirebaseService.addPost(post).then(function(response){
			$scope.getPosts();
		})
	}

	// $scope.fillIn = function() {
	// 	$scope.newPost = {
	// 		title: 'Cool Stuff',
	// 		body: 'This is another post',
	// 		author: 'Tamara'
	// 	};
	// }
});