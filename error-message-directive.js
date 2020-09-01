function errorMessage () {
    return {
        restrict: "A",
        compile: function($element, $attrs) {
            
        }
    }
};

angular
    .module('app')
    .directive('errorMessage', errorMessage)
