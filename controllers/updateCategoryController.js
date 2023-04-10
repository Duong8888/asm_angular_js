var updateCategoryController = function (
  $http,
  $scope,
  $location,
  $routeParams
) {
  $http.get(`http://localhost:3000/category/${$routeParams.id}`).then(
    function (res) {
      $scope.inputs = res.data;
    },
    function (erro) {
      console.log(erro);
    }
  );

  $scope.inputs = {
    name: "",
  };
  $scope.onUpdate = function () {
    $http
      .put(`http://localhost:3000/category/${$routeParams.id}`, $scope.inputs)
      .then((res) => {
        $location.url("/category");
      });
  };
};
