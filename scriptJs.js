let x = 6;
let y = 2;
// var console;
// console.log(x - y === 4);

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

let toneOfText = prompt("Hey! What's up? ");
if (toneOfText === toneOfText.toUpperCase()) {
    console.log('WHY ARE WE SHOUTING?!')
} else if (toneOfText === toneOfText.toLowerCase()) {
    console.log('what are you whispering for?')
} else {
    console.log("Now we're talking!")
}