 var app = angular.module('myApp', ['ngRoute']);
        app.config(function($routeProvider){
            $routeProvider
                .when('/',{
                    templateUrl:"./views/table.html",
                    controller:tableController
                })
                .when('/home',{
                    templateUrl:"./views/table.html",
                    controller:tableController
                })
                .when('/add',{
                    templateUrl:"./views/add.html",
                    controller:addController
                })
                .when('/detail/:id',{
                    templateUrl:"./views/detail.html",
                    controller: detailController
                })
                .when('/profile',{
                    templateUrl:"./views/profile.html"
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
                .when('/update/:id',{
                    templateUrl:"./views/update.html",
                    controller:updateController
                })

                .when('/category',{
                    templateUrl:"./views/tableCategory.html",
                    controller:tableCategoryController
                })

                .when('/deleteCategory/:id',{
                    templateUrl:"./views/tableCategory.html",
                    controller: deleteCategoryController,
                    resolve: {
                        redirect: function($location) {
                            $location.path('/category');
                          }
                    }
                })

                .when('/addCategory',{
                    templateUrl:"./views/addCategory.html",
                    controller:addCategoryController
                })

                .when('/updateCategory/:id',{
                    templateUrl:"./views/updateCategory.html",
                    controller:updateCategoryController
                })
        });