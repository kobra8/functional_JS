document.addEventListener("DOMContentLoaded", function(event) {

    var run = function(f, g) {
        return function(x) {
            return f(g(x));
        };
    };

   var increment = counter => counter + 1;

   var plus2 = run(increment, increment);

    console.log(plus2(1));
    

var input = [80, 90,100];

var sum = (total, num) => total + num;
var total = arr => arr.reduce(sum);
var size = arr => arr.length;
var divide = (a,b) => a / b;
var average = arr => divide(total(arr), size(arr));

console.log(average(input));
    


    
});