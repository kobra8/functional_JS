document.addEventListener("DOMContentLoaded", function(event) {
//Ver1
//document.querySelector('#msg').innerHTML="<h3>Witaj Świecie</h3>";

//Ver2
// function printMessage(elementId, format, message) {
//     document.querySelector(`#${elementId}`).innerHTML =
//     `<${format}>${message}</${format}>`
// }

// printMessage('msg','h2','Witaj Świecie');

//Ver3
var run = function(f, g, h) {
    return function(x) {
          return f(g(h(x))); 
    };
};

var addToDom = function(id) {
    return document.querySelector(`#${id}`).innerHTML = h2;
}

var h2 = function(echo) {
    return `<h2>${echo}</h2>`
}

var echo = function(x) {
    return x;
}

var printMessage = run(addToDom('msg'),h2,echo);
printMessage('Myśl funkcyjnie');

console.log(
[0,1,2,3,4,5,6,7,8,9].map(x => Math.pow(x, 2))
);



// Koniec DOMContentLoaded 
});