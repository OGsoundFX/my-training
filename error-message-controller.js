function ErrorController () {
    this.errorMessages = [
        {
        error: 'There is an error',
        type: 'error'
        },{
            error: 'There is a Medium error',
            type: 'error-medium'
        },{
            error: 'There is a Big error',
            type: 'error-big'
        }];
};

angular
    .module('app')
    .controller('ErrorController', ErrorController)
