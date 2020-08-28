function CounterController() {
    this.count = 0;
    this.increment = () => {
        this.count ++;
    };
    this.decrement = () => {
        if(this.count > 0) {
            this.count --;
        };
    };
};

angular
    .module('app')
    .controller('CounterController', CounterController)