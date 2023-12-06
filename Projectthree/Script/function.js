// function logToconsole() {
// console.log('Welcome to class')
// } 

// logToconsole()

let a = 10
let b = 6

const areaRectangle = () => {
    let a = 7
    let b = 8
    area = a * b
    console.log(area)
    return area
}

let calcArea = areaRectangle()
console.log(calcArea)
console.log(b)

const perimeterRect = (c, d) => {
    let peri = 2 * (c + d)
    return 2 * (c + d)
}

console.log(perimeterRect(a, b))

let scores = []

for (let i = 0; i < 20; i++) {
    scores[i] = Math.floor(Math.random() * 100)
}

// console.log(scores)

const prinval = (scores) => {
    let total = 0

    for (let index = 0; index < scores.length; index++) {
        const element = scores[index]

        if (element >= 50) {
            total += element
        }

        // console.log(total)

    }

    return total
}

console.log(printVal(scores))
