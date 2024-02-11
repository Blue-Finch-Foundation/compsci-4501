class Human {

    //? This Reference the Scope That Is Currently In
    constructor(fName, lName) {
        this.fName = fName
        this.lName = lName
    }

    fullName() {
        return this.fName + " " + this.lName
    }

}

const person1 = new Human("Tom", "Everson")
const person2 = new Human("Luke", "KNL")

console.log(person1.fullName())