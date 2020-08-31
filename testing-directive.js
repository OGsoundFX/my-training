function testing() {
    return {
        restrict: 'E',
        scope: {},
        controller: 'CounterController as counter',
        template: `
        <p>{{counter.name}}</p>
        <h4>Your number is: {{ counter.count }} </h4>
        <button ng-click="counter.decrement();">-</button>
        <button ng-click="counter.increment();">+</button>
        `,
        link: function ($scope, $element, $attrs) {
            $attrs.$observe('name', function (value) {
                if (value === "Drink count") {
                    console.log("testing");
                    $attrs.$updateClass('green') // not working for some reason
                }
            });
        }
    };
};

angular
    .module('app')
    .directive('counter', testing);
