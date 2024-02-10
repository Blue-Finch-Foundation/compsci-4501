const textBox = document.getElementById("textbox")

const incrementButton = document.getElementById("increment")
const decrementButton = document.getElementById('decrement')

let number = 0

textBox.innerText = number

incrementButton.addEventListener("click", function () {
    number++;
    textBox.innerText = number
})

//? Decrement Button 

decrementButton.addEventListener("click", function () {
    number--;
    textBox.innerText = number
})