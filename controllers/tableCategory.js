var tableCategoryController = function ($scope, $http) {
    $http.get('http://localhost:3000/category')
        .then(
            function (res) {
                $scope.categoryList = res.data;
            },
            function (erro) {
                console.log(erro);
            }
        )
}