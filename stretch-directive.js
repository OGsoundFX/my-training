function stretch () {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            const element = $element[0];
            console.log(element);
            element.addEventListener('click', () => {
                console.log("I just clicked");
            });
        }
    };
};

angular
    .module('app')
    .directive('stretch', stretch)