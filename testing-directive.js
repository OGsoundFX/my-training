function testing() {
    return {
        restrict: 'E',
        // scope: {},   // the scope prevents from updating the class
        // controller: 'CounterController as counter',
        template: `
        <p>{{counter.name}}</p>
        <h4>Your number is: {{ counter.count }} </h4>
        <button ng-click="counter.decrement();">-</button>
        <button ng-click="counter.increment();">+</button>
        <button ng-click="counter.changeName();">Change Color</button>        
        `,
        link: function ($scope, $element, $attrs) {
            // console.log($attrs);
            $attrs.$observe('name', function (value) {
                if (value === "Drink count") {
                    $attrs.$updateClass('green', 'red') // first the new value and second the value you want to change
                } else {
                    $attrs.$updateClass('red', 'green')
                }
            });
        }
    };
};

angular
    .module('app')
    .directive('counter', testing);
