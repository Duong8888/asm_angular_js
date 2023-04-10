var addCategoryController = function ($scope, $http, $location) {
  $scope.inputs = {
    name: "",
  };
  $scope.save = function () {
    console.log($scope.inputs);
    $http.post("http://localhost:3000/category", $scope.inputs).then((res) => {
      $location.url("/category");
    });
  };
};
