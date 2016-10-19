angular.module('ecommerceApp')
  .controller('mainCtrl', function( $scope, service ) {

    $scope.showEdit = false;

    // $scope.editProduct = {
    //   image: product.image,
    //   name: product.name,
    //   description: product.description,
    //   price: product.price
    // };
    $scope.getProducts = function() {
      service.getProducts().then(function( response ) {
        $scope.products = response.data;
      });
    };
    $scope.getProducts();

    $scope.getProductById = function( product ) {
      service.getProductById( product ).then(function( response ) {
        console.log(response.data);
      });
    };

    $scope.addProducts = function( product ) {
      service.addProducts( product );
      $scope.getProducts();
    };

    $scope.updateProductById = function( product ) {
      console.log(product);
      service.updateProductById( product );
    };

    $scope.deleteProductById = function( product ) {
      console.log(product);
      service.deleteProductById( product );
      $scope.getProducts();
    };
  });
