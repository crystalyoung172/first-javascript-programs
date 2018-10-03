const userInput= parseInt(prompt("Please input a number between 1-100"))
if(userInput < 25) {
    console.log("less than 25")
} else if (userInput >= 25 && userInput < 50) {
    console.log("more than 25 less than 25")
} else if(userInput >= 50 && userInput < 75) {
    console.log("More than 50 less than 75")
} else {
    console.log("More than 75 less than 100")
}   
