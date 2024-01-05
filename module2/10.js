const inputBox = document.getElementById("input-box")
const button = document.getElementById("button")
const messageBox = document.getElementById("message-box")

button.addEventListener("click", function () {
    const age = parseInt(inputBox.value)
    if (age < 18) {
        messageBox.innerHTML = "<h1>You are UnderAge!</h1>"
    } else {
        messageBox.innerHTML = "<h1>You can Drive!</h1>"
    }
})