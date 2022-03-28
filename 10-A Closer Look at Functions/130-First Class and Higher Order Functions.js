/*

🟢 First-Class Functions

    🟡 JavaScript treats functions as first-class citizens
    🟡 This means functions are simply values
    🟡 Functions are just another type of object

    Examples:

        🔵 Store functions in variables or properties
        const add = ⏩(a, b) => a + b⏪
        or
        const counter = {
            value: 23,
            inc: ⏩function(){ this.value ++;}⏪
        }

        🔵 Pass functions as arguments to OTHER functions
        const greet () => console.log('Hey Jonas');
        btnClose.addEventListener('click', ⏩greet⏪);

        🔵 Return functions FROM functions

        🔵 Call methods on functions
        counter.inc.⏩bind⏪(someOtherObject);

🟢 Higher-Order Functions

    🟡 A function that receives another function as an argument, that returns a new function or both
    🟡  This is only possible because of first-class functions

    Examples:

        🔵 Function that receives another function
        const greet () => console.log('Hey Jonas');
        btnClose.addEventListener('click', greet); //  greet = callback function

        🔵 Function that returns new function
        function ⏩count()⏪{
            let counter = 0;
            return function(){ // Returned function
                counter++;
            };
        }

*/
