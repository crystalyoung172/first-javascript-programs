var number = prompt("What's the first number should be checked?");
if (number % 15 === 0) {
    document.write("Fizz Buzz");
} else if (number % 3 === 0) {
    document.write("Fizz");
} else if (number % 5 === 0) {
    document.write("Buzz");
}else {
    document.write(number)
}

