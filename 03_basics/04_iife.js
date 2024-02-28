//  Immediately Invoked Function Expression (IIFE)

(function chai() {      // named iife
    console.log(`DB CONNECTED`)
})();          //   we have to use semicolon to terminate the current iife function , so that we can use another iife

( (name) => {       //  un-named or simple iife
    console.log(`DB CONNECTED TWO ${name}`)
})("Ankit")