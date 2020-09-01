function errorMessage () {
    return {
        restrict: 'A',
        compile: function($element, $attrs) { // no need for &scope as everything is loaded for the base template
            
            // Best practise:

            $element.addClass('error');
            return function postLink($scope, $element, $attrs) { // this is one of the 2 link functions, but here we don't need the preLink
                $element.addClass($attrs.type);
            }

            // Conventional structure with pre and post links:

            // return {
            //     pre: function ($scope, $element, $attrs) { // this is one of the 2 link functions, but here we don't need the preLink
            //     $element.addClass('error');
            //     $element.addClass('background');
            //     },

            //     post: function ($scope, $element, $attrs) { // this is one of the 2 link functions, but here we don't need the preLink
            //     $element.addClass($attrs.type);
            //     }
            // }

        }
        
        // this is the easiest way but less effective
        // link: function($scope, $element, $attrs) {
        //     $element.addClass('error');
        //     $element.addClass($attrs.type); // called twice which is why it is less efficient then compile
        // }
    };
};

angular
    .module('app')
    .directive('errorMessage', errorMessage)
