let value = false

function valueChanger() {
    value = true
}

valueChanger()
console.log(value)

//! Using let can change global scope. That's why you need to be careful.