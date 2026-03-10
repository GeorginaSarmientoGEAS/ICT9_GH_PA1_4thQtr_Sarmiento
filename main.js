// JavaScript Conditionals

/* function identify_sign() {
    num1 = document.getElementById('input1').value;

    if (num1 > 0) {
        document.getElementById('output').innerHTML = "it is positive";
    } 
    else if (num1 == 0) {
        document.getElementById('output').innerHTML = "it is zero";
    }
    else {
        document.getElementById('output').innerHTML = "it is negative";
    }
} */

function odd_or_even() {
    num1 = document.getElementById('input1').value;

    if (num1 % 2 == 0) {
        window.alert('it is an even number');
    } else {
        window.alert('it is an odd number');
    }
}