var deleteCategoryController = function ($scope, $http,$routeParams) {
    // let actrion = confirm("Bạn chắc chắn muốn xóa sản phẩm này chứ ?");
    // if(actrion){
        $http.delete(`http://localhost:3000/category/${$routeParams.id}`)
        .then(
            function (res) {
                tableCategoryController();
            }, 
            function (erro) { }
            )
    // }
}