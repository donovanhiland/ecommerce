angular.module('ecommerceApp')
  .service('service', function( $http ) {

    return {
      getProducts: function() {
        return $http ({
          method: 'GET',
          url: '/api/products'
        }).then(function(response) {
          return response;
        });
      },

      getProductById: function( product ) {
        return $http ({
          method: 'GET',
          url: '/api/products/' + product._id
        }).then(function(response) {
          return response;
        });
      },

      addProducts: function( product) {
        $http ({
          method: 'POST',
          url: '/api/products',
          data: product
        }).then(function(response) {
          return response;
        });
      },

      updateProductById: function( product ) {
        $http ({
          method: 'PUT',
          url: '/api/products/' + product._id,
          data: product
        }).then(function(response) {
          return response;
        });
      },

      deleteProductById: function( product ) {
        $http ({
          method: 'DELETE',
          url: '/api/products/' + product._id
        }).then(function(response) {
          console.log(response);
        });
      }
    };


  });
