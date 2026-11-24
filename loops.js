
 // Create an array called numbers with values 1 through 5
let numbers = [1, 2, 3, 4, 5];

// 1. For loop that prints each number in the array
console.log("Numbers in the array:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 2. While loop that counts down from 5 to 1
console.log("Countdown:");

let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}

// 3. Loop that prints only even numbers
console.log("Even numbers:");

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

// 4. Loop that calculates the sum of all numbers
console.log("Sum of all numbers:");

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);
