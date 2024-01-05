const person = { name: "Max", age: 10 }

function checkAge(age) {
    if (age < 18) {
        console.log("UnderAge")

    }
}

function ageValidation(age) {
    if (age < 18) return false
}

const checkedAge = ageValidation(person.age)
console.log(checkedAge)

//? If you want to assigned a function value to a variable, you need to pass a return. 
