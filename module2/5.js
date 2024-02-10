let x = 5

// while (x < 10) {
//     console.log(x)
// }

// do {
//     console.log(x)
//     x = x + 1
// }
// while (x < 10)

//? Difference between while, and do-while is do-while will run no matter the condition

// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

// //! Difference between while, and for loops is for-loop will specific amount of time, but
// //! while will run until the condition is met


const personObject = { name: "Tom", age: 18 }

for (let x in personObject) {
    console.log(personObject[x])
}

const personArray = ["Tom", 18]

for (let x in personArray) {
    console.log(personArray[x])
}

const ageArray = [13, 20]

for (let x in ageArray) {
    if (ageArray[x] < 18) {
        console.log("Underage")
        break
    } else {
        console.log("Legal")
    }
}