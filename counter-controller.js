function CounterController($scope) {
    this.count = 0;
    this.name = "Drink count";
    this.countList = [];
    this.increment = () => {
        this.count ++;
        this.countList.unshift({id: this.count});
    };
    this.decrement = () => {
        if(this.count > 0) {
            this.count --;
            this.countList.unshift({id: this.count});
        };
    };
    // $scope.$watch(angular.bind(this, function () {
    //     return this.countList;
    // }), function (newValue, oldValue) {
    //     if (newValue === oldValue) {
    //         return;
    //     };
    //     console.log(newValue, oldValue);
    // }, true); // true enables to do a deep watch of countList which can be inconvenient

    $scope.$watchCollection(angular.bind(this, function () {
        return this.countList;
    }), function (newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        };
        console.log(newValue, oldValue);
    });
};

angular
    .module('app')
    .controller('CounterController', CounterController)