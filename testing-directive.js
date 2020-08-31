function testing() {
    return {
        restrict: 'E',
        scope: {},
        controller: 'CounterController as counter',
        template: `
        <h4>Your number is: {{ counter.count }} </h4>
        <button ng-click="counter.decrement();">-</button>
        <button ng-click="counter.increment();">+</button>
        `
    };
};

angular
    .module('app')
    .directive('counter', testing);
