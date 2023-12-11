const input = document.querySelector('input')

let result = ''
let operation = ''

document.querySelectorAll(".button").forEach(el => {
    el.addEventListener('click', (e) => {
        if (Number.isInteger(parseInt(el.textContent))) {
            result = result + el.textContent
            input.value = result
        } else {
            operation = el.textContent
        }
    })
})

const multiplyButton = document.querySelector("#multiply")
multiplyButton.addEventListener("click", () => {
    result = result + "*"
    input.value = result
})

const addingButton = document.querySelector(".adding")
addingButton.addEventListener("click", () => {
    result = result + "+"
    input.value = result
})

const subtractButton = document.querySelector(".subtract")
subtractButton.addEventListener("click", () => {
    result = result + "-"
    input.value = result
})

const divideButton = document.querySelector(".divide")
divideButton.addEventListener("click", () => {
    result = result + "/"
    input.value = result
})

const deleteButton = document.querySelector(".delete")
deleteButton.addEventListener("click", () => {
    input.value = ""
    result = ""
})

const equalButton = document.querySelector(".equal")
equalButton.addEventListener("click", () => {
    input.value = result + "=" + eval(result)
})