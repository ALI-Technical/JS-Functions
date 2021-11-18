// Q NO. 1

var date = new Date();

function dateNow() {
    alert(date);
}


// Q NO. 2

function greetings() {
    var firstName = prompt("Enter First Name:");
    var lastName = prompt("Enter Last Name:");
    alert("Welcome " + (firstName + lastName));
}
//  TWO WAYS
// Function (greetings());
// (greetings());


// Q NO. 3

function sum() {
    var num1 = +prompt("Enter a number");
    var num2 = +prompt("Enter a number");
    alert(num1 + num2);
}
// sum();


// Q NO. 4

function calculator() {
    var num1 = +prompt("Enter a number");
    var opreator = prompt("Enter an Operator From These: +, -, *, /");
    var num2 = +prompt("Enter a number");
    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiply = num1 * num2;
    var divide = num1 / num2;
    var remainder = num1 % num2;
    if(opreator === "+"){
        alert("The Answer Is: " + addition);
    }
    else if(opreator === "-"){
        alert("The Answer Is: " + subtraction);
    }
    else if(opreator === "*"){
        alert("The Answer Is: " + multiply);
    }
    else if(opreator === "/"){
        alert("The Answer Is: " + divide);
    }
    else if(opreator === "%"){
        alert("The Answer Is: " + remainder);
    }

}


// Q NO. 5

function Square() {
    var num1 = +prompt("Enter a number");
    var result = num1*num1
    alert("The Result Is " + result);
}


// Q NO. 6

function factr() {
    var userNum = +prompt("Enter a Number");
    var fact = 1;
    if (userNum == 0) {
        document.write("<br><br>The Factorial of " + userNum + " is 1");
    }
    else if (userNum < 0) {
        document.write("<br><br>The Factorial of Negative numbers is not Possible");
    }
    else {
        for (i = 1; i <= userNum; i++) {
            fact = fact * i;
        }
        document.write("<br><br>The Factorial of " + userNum + " is " + fact);
    }
}


// Q NO. 7

function counting() {
    var startNum = +prompt("Enter Starting Number");
    var endNum = +prompt("Enter Ending Number");

    for (i = startNum; i <= endNum; i++) {
        document.write(i + "<br>");
    }
}


// Q NO. 8

// var base = prompt("Enter Base ");
// var perp = prompt("Enter Perpendicular ");

// function calculateHypotneus(){
//     function calculateSquare(){

//     }
// }


// Q NO. 9

function mainArea(){
function rectangleArea(width=5,height=5){// Default
    var area = width * height;
    document.write("The area of Rectangle is " + area);
}

rectangleArea(+prompt("Enter Width Of Rectangle"),+prompt("Enter Hieght Of Rectangle"));
}


// Q NO. 10

function palindromeCheck() {
    var string = prompt("Enter a String");
    var len = string.length;
    var msg = "It is a Palindrome";
    for (i = 0; i < len / 2; i++) {
        if (string[i] != string[len - 1 - i]) {
            msg = "It is Not a Palindrome";
        }
    }
    alert(`${string}: ${msg}`);
}


// Q NO. 13

// function js_resources(string , letter){
//     var myStr = string + letter;
//     document.write("The occurrences of 'o' in " + string + " " + myStr.match(/o/g));
// }

// js_resources("JS-Resources.com" , "o");


//// Q NO . 14

function calcCircumference(radius="") {
    var circumferrence = 2 * Math.PI * radius;
    document.write("<br><br>The circumference is: " + Math.round(circumferrence));
}

calcCircumference(3);

function calcArea(radius="") {
    area = Math.PI * radius * radius;
    document.write("<br><br>The Area of Circle is: " + Math.round(area));
}

calcArea(3);