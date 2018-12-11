var myApp = angular.module("gif", ["firebase"]);
myApp.controller("MainCtrl", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
        var ref = firebase.database().ref().child("gifs");
        $scope.chats = $firebaseArray(ref);
        $scope.update = function(user) {
            var newmessage = { from: user.name || "anonymous", body: user.chat };
            console.log(newmessage);
            $scope.chats.$add(newmessage);
            user.chat = "";
        }
    }
]);
