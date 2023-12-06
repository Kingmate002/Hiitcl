const os = require('os')
const data = require('./data')

// console.log('Welcome to class')

const greeting = (name) => {
    console.log('Welcome ${name}')
}

// greeting('James')
// console.log(os)
const { users, age, email } = data


console.log(data)
console.log(data.users)
console.log(data.age)