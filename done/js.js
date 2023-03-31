let password = "letmein"
let input = "letmein"
ismatch = input == password

let score = 50
let bonus = 25
let totalScore = bonus + score

let numstring = "1234";
let numInt = parseInt(numstring);
console.log(numInt);


let priceString = 99.99;
let priceInt = parseInt(priceString);
console.log(priceInt);

let num1 = prompt("vilket tal?");
let num2 = prompt("det andra talet?");

let result = parseInt(num1) + parseInt(num2);
console.log(result)

function adultOrNot(){ 
let age = prompt("ålder?");  
age = parseInt(age)
let adult = age > 18

if (adult){
    alert("Du är vuxen, grattis")
}

else{
    alert("Du är ett barn")
}
}

