function errormessage () {
    return {
        restrict: 'A',
        // compile: function($element, $attrs) {
        //     $element.addClass('error');
        //     return function postLink($scope, $element, $attrs) {
        //         $element.addClass('error-' + $attrs.type);
        //     }
        // }
        link: function($scope, $element, $attrs) {
            console.log("hello");
            console.log($attrs)
        }
    };
};

// function errorMessage () {
//     return {
//         restrict: 'A',
//         link: function($scope, $element, $attrs) {
//             const element = $element[0];
//             console.log(element);
//             element.addEventListener('click', () => {
//                 console.log("I just clicked");
//             });
//         }
//     };
// };

angular
    .module('app')
    .directive('errormessage', errormessage)
