const user = {
    fullName: "Kingmate James",
    email: "Kingmatedamiete@gmail.com",
    age: 16,
    phoneNumber: [
        {
            home: '08056107133',
            mobile: '08066647344'
        }
    ],
    children: ['okiki', 'chioma'],
    newBirth: function () {
        return `${this.fullName}bithed a new child`
    }
}

console.log(user)
console.log(user.fullName)
console.log(user.newBirth())
user.fullName = "Kingmate James"
console.log(user.fullName)
console.log(user.age)
console.log(user.newBirth())



// TASK

function sumEvenNumbersBetween(num1, num2) {
    // Make sure num1 is smaller than num2
    if (num1 > num2) {
        [num1, num2] = [num2, num1]; // Swap the values
    }

    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        // Check if the current number (i) is even
        if (i % 2 === 0) {
            sum += i; // Add even number to the sum
        }
    }

    return sum;
}

// Example usage:
const result = sumEvenNumbersBetween(1, 10);
console.log(result); // Output: 30 (2 + 4 + 6 + 8 + 10)


function generateFibonacci(n) {
    const fibonacciSequence = [];

    // First two Fibonacci numbers
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        fibonacciSequence.push(a);
        const next = a + b;
        a = b;
        b = next;
    }

    return fibonacciSequence;
}

const n = 100; // Number of Fibonacci numbers to generate
const fibonacciNumbers = generateFibonacci(n);

for (let i = 0; i < n; i++) {
    console.log(`Fibonacci(${i + 1}): ${fibonacciNumbers[i]}`);
}


function findLargestNumber(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }

    let largest = arr[0]; // Assume the first element is the largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update the largest if a larger number is found
        }
    }

    return largest;
}

// Example usage:
const numbers1 = [4, 12, 7, 42, 25, 9, 30];
const largestNumber = findLargestNumber(numbers);
console.log(`The largest number is: ${largestNumber}`);


function sumEvenNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i]; // Add the even number to the sum
        }
    }

    return sum;
}

// Example usage:
const numbers2 = [4, 12, 7, 42, 25, 9, 30];
const evenSum = sumEvenNumbers(numbers);
console.log(`The sum of even numbers is: ${evenSum}`);


function filterEvenNumbers(arr) {
    const evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]); // Add even number to the new array
        }
    }

    return evenNumbers;
}

// Example usage:
const numbers = [4, 12, 7, 42, 25, 9, 30];
const evenNumbersArray = filterEvenNumbers(numbers);
console.log(`Even numbers in the array: ${evenNumbersArray}`);