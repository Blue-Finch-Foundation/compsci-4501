const textBox = document.getElementById("text")
const button = document.getElementById("button")

textBox.innerText = "Hello"
// textBox.innerHTML = "<h1>Here Is Temporary <br /> Text</h1>"

button.addEventListener("click", function () {
    textBox.innerText = "Hi"
})
