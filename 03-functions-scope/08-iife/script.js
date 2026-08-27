// Immediatly Invoked Function Expression


(function () {
    const user = 'john';
    console.log(user);

    const hello = () => console.log('Hello from the IIFE');
    hello();
})();
