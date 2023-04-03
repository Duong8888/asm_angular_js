var updateController = function($scope,$http,$routeParams,$location){
    $http.get(`http://localhost:3000/products/${$routeParams.id}`)
    .then(
        function (res) {
            $scope.inputs = res.data;
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

        $scope.onUpdate = function(){
            $http.put(`http://localhost:3000/products/${$routeParams.id}`, $scope.inputs).then(
                function (res) {$location.path('/home')},
                function (err) {},
            )
        };
};