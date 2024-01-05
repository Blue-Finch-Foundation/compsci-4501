//? Primitive

const stringDataType = "Hello"
const numberDataType = 100
const bigIntDataType = BigInt(111111111111)
const booleanDataType = false
const undefinedDataType = undefined
const symbolDataType = Symbol(12345)

//? Non-Primitive

const objectDataType = { name: "Tom", age: 18 }
const arrayDataType = ["Tom", 18]
const dateDataType = new Date()

//! Primative vs Non-Primative
stringDataType.name = "hello"
console.log(stringDataType.name)

dateDataType.name = "Hello"
console.log(dateDataType.name)

//? You can check type of a variables by using typeof 

console.log(typeof stringDataType)