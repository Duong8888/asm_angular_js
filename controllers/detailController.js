var detailController = function ($scope, $routeParams, $http) {
    $http.get(`http://localhost:3000/products/${$routeParams.id}`)
        .then(
            function (res) {
                $scope.detailProduct = res.data;
            },
            function (erro) {
                console.log(erro);
            }
        );
        
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