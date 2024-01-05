//* https://www.w3schools.com/js/js_arrays.asp

const person = { name: "Tom", age: 18 }

//? Object Can store any primitive values
//? Array Have Indexes which are name

console.log(person.age)
console.log(person["name"])

//! Difference between array and objects, is object doesn't have any built-in methods
//! and properties, but you can defined them

const empty = {}

console.log(empty) //! You might see this has no properties

const newPerson = {
    fname: "John",
    lname: "Khant",
    age: 18,
    fullName: function () {
        return this.fname + " " + this.lname
    }
}

console.log(newPerson.fullName())

//! will explain about this later on