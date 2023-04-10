var addController = function ($scope, $http, $location) {
  $http.get("http://localhost:3000/category").then(
    function (res) {
      $scope.categoryList = res.data;
    },
    function (erro) {
      console.log(erro);
    }
  );

  $scope.inputs = {
    name: "",
    type_id: "",
    area: "",
    price: "",
    image_url: "",
    status: "",
  };

  $scope.save = function () {
    validate($scope);
    if (validate($scope) == 0) {
      console.log($scope.inputs);
      $http
        .post("http://localhost:3000/products", $scope.inputs)
        .then((res) => {
          $location.url("/home");
        });
    }
  };
};
