var addController = function ($scope, $http, $location) {
    $scope.inputs = {
        "name": '',
        "type_id": '',
        "area": '',
        "price": '',
        "image_url": '',
        "status": ''
      }
    $scope.save = function () {
        console.log($scope.inputs);
        $http.post('http://localhost:3000/products',$scope.inputs)
        .then((res) => {
            $location.url("/home");
        })
    };
}