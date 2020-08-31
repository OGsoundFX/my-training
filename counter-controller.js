function CounterController($scope) {
    $scope.count = 0;
    $scope.increment = () => {
        $scope.count ++;
    };
    $scope.decrement = () => {
        if($scope.count > 0) {
            $scope.count --;
        };
    };
    $scope.$watch('count', function (newValue, oldValue) {
        console.log(newValue, oldValue);
    });
};

angular
    .module('app')
    .controller('CounterController', CounterController)