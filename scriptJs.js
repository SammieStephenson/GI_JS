//Very Easy 
let x = 6;
let y = 2;
// var console;
// console.log(x - y === 4);

//Easy
const firstName = "Sammie"
const secondName = "Tristyn"
console.log(firstName, secondName);


const firstNameLength = 6
const secondNameLength = 7
console.log(secondNameLength > firstNameLength)
console.log("The name " + firstName + " is shorter than the name  " + secondName + " by 1 letter. ");

const difference = 1
if (firstNameLength >= secondNameLength) {
    console.log("The name " + firstName + " is longer than " + secondName + " by " + difference + ".")
} else {
    console.log("The name " + secondName + " is longer than " + firstName + " by " + difference + ".")
}

//Medium
let toneOfText = prompt("Hey! What's up? ");
if (toneOfText === toneOfText.toUpperCase()) {
    console.log('WHY ARE WE SHOUTING?!')
} else if (toneOfText === toneOfText.toLowerCase()) {
    console.log('what are you whispering for?')
} else {
    console.log("Now we're talking!")
}

//Hard
let num1 = Number(prompt('Pick a Number'))
let num2 = Number(prompt('Pick another Number'))
const add = function (num1, num2) {
    return (num1 + num2)
}
console.log(add(num1, num2))

const subtract = function (num1, num2) {
    return num1 - num2
}
console.log(subtract(num1, num2))

const multiply = function (num1, num2) {
    return num1 * num2
}
console.log(multiply(num1, num2))

const divide = function (num1, num2) {
    return num1 / num2
}
console.log(divide(num1, num2))

//Very Hard 

const entry2 = prompt('Pick an Opperation + - * OR /')

if (entry2 == '+') {
    alert(`${num1} + ${num2} = ${add(num1, num2)}`)
} else if (entry2 == "-") {
    alert(`${num1} - ${num2} = ${subtract(num1, num2)}`)
} else if (entry2 == "*") {
    alert(`${num1} * ${num2} = ${multiply(num1, num2)}`)
} else if (entry2 == "/") {
    alert(`${num1} / ${num2} = ${divide(num1, num2)}`)
}
