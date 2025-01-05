const numberInput = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const outputText = document.getElementById("output")

const outputContainer = document.getElementById("conversion-container")

const numeralConversions = {
    1000 : "M",
    900 : "CM",
    500 : "D",
    400 : "CD",
    100 : "C",
    90 : "XC",
    50 : "L",
    40 : "XL",
    10 : "X",
    9 : "IX",
    5 : "V",
    4 : "IV",
    1 : "I"
}

const numerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

let error = false

convertBtn.addEventListener("click", () => {
    const val = numberInput.value
    console.log(val)

    if (!val) {
        errorMsg(2)
        return
    } else if (val < 0) {
        errorMsg(1)
        return
    } else if (val > 3999) {
        errorMsg(0)
        return
    }

    if (error) {
        reset()
    }

    outputText.innerHTML = convert(numberInput.value)
    outputContainer.style.display = "block"

})

function errorMsg(msg) {
    error = true

    outputContainer.style.display = "block"

    outputContainer.style.border = "5px solid #850000"
    outputContainer.style.backgroundColor = "#ffadad"
    outputContainer.style.color = "#850000"

    if (msg === 1) {
        outputText.innerHTML = "Please enter a number greater than or equal to 1"
    } else if (msg === 0) {
        outputText.innerHTML = "Please enter a number less than or equal to 3999"
    } else if (msg === 2) {
        outputText.innerHTML = "Please enter a valid number"
    }
}

function reset() {
    error = false

    outputContainer.style.border = "5px solid #403D39"
    outputContainer.style.backgroundColor = "#B8B1A6"
    outputContainer.style.color = "#403D39"

    outputText.innerHTML = ""
}

function convert(value) {
    let answer = ""

    for (let i = 0; i < numerals.length; i++) {
        while ((value - numerals[i]) >= 0) {
            answer += numeralConversions[numerals[i]]
            value -= numerals[i]
        }
        //console.log(answer)
    }
    
    return answer
}