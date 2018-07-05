var app= angular.module("myApp", []);

    app.controller("myCtr", function($scope, $http){
        $http.get("data.json").then(function(item){
            $scope.networks=item.data;
        })

        $scope.removeNetwork=function(network){
            var removedNetwork=$scope.networks.indexOf(network);
            $scope.networks.splice(removedNetwork,1);
        }

        $scope.addNetworks=function(){
            $scope.networks.push({
                name:$scope.newName,
                users:$scope.newUsers,
                devlopmentLang:$scope.newDev
            })
        }
    })