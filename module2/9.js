const textBox = document.getElementById("text")
const button = document.getElementById("button")
let number = 0

textBox.innerText = number

button.addEventListener("click", function () {
    number++;
    textBox.innerText = number
})

//? Decrement Button 