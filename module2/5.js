let x = 0

while (x < 10) {
    console.log(x)
    x++
}

do {
    console.log(x)
    x++
}
while (x < 10)

//? Difference between while, and do-while is do-while will run no matter the condition

for (let index = 0; index < 10; i++) {
    console.log(index)
}

//! Difference between while, and for loops is for-loop will specific amount of time, but
//! while will run until the condition is met


const personObject = { name: "Tom", age: 18 }

for (let x in personObject) {
    console.log(personObject[x])
}

const personArray = ["Tom", 18]

for (let x of personArray) {
    console.log(personArray[x])
}

//? For In for looping an Object, and For Of for looping an Array;

const ageArray = [21, 15, 19]

for (let x of ageArray) {
    if (ageArray[x] < 18) {
        console.log("Underage")
        break
    }
    console.log("Legal")
}