const haveMoney = true;
const hungry = true;

if (haveMoney && hungry) {
    console.log("Buying Burger");
}

const coldDrink = false;
const airCondOn = true;

if (coldDrink || airCondOn) {
    console.log("Ahhh");
}

const x = +process.argv[2];

if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
}
else if (x % 3 == 0) {
    console.log("Fizz");
}
else if (x % 5 == 0) {
    console.log("Buzz");
} else {
    console.log("Nothing");
}