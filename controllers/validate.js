var validate = function ($scope) {
  $scope.erros = [];
  var errorCount = 0;

  if (!$scope.inputs.name) {
    $scope.erros["name"] = "bạn chưa nhập tên.";
    errorCount++;
  }
  if (!$scope.inputs.type_id) {
    $scope.erros["type_id"] = "bạn chưa chọn loại.";
    errorCount++;
  }
  if (!$scope.inputs.area) {
    $scope.erros["area"] = "bạn chưa nhập diện tích.";
    errorCount++;
  }
  if (!$scope.inputs.price) {
    $scope.erros["price"] = "bạn chưa nhập giá.";
    errorCount++;
  }
  if (!$scope.inputs.image_url) {
    $scope.erros["image_url"] = "bạn chưa nhập ảnh.";
    errorCount++;
  }
  if (!$scope.inputs.status) {
    $scope.erros["status"] = "bạn chưa chọn trạng thái.";
    errorCount++;
  }
  return errorCount;
};
