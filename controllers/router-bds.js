 var app = angular.module('myApp', ['ngRoute']);
        app.config(function($routeProvider){
            $routeProvider
                .when('/',{
                    templateUrl:"./views/test.html",
                    controller:homeController
                })
                .when('/home',{
                    templateUrl:"./views/table.html",
                    controller:tableController
                })
                .when('/add',{
                    templateUrl:"./views/add.html"  
                })
                .when('/detail/:id',{
                    templateUrl:"./views/detail.html",
                    controller: detailController
                })
                .when('/save',{
                    templateUrl:"./views/add.html",
                    controller: addController
                })
                .when('/delete/:id',{
                    templateUrl:"./views/table.html",
                    controller: deleteController,
                    resolve: {
                        redirect: function($location) {
                            $location.path('/home');
                          }
                    }
                })
        });