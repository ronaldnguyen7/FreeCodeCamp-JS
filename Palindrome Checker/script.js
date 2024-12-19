// Get elements from index.html
const checkButton = document.getElementById('check-btn')
const inputText = document.getElementById('text-input')
const result = document.getElementById('result')

// Check button is pressed
checkButton.addEventListener("click", () => {
    // Gets user input
    const inputString = inputText.value.toString()
    
    // Handles output cases
    if (inputString === "") {
        alert("Please input a value!")
    } else if (isPalindrome(inputString)) {
        result.innerText = `${inputString} is a palindrome`
    } else {
        result.innerText = `${inputString} is not a palindrome`
    }
})

// Determines if a string a palindrome
function isPalindrome(inputedString) {
    // Character values that have no effect on if a string is a palindrome
    const ignoredValues = new Set([
        '.', 
        '!', 
        '?', 
        ';', 
        ',', 
        ':',
        '\'',
        '"',
        '(',
        ')',
        '-',
        '[',
        ']',
        '/',
        '\\',
        '_',
        ' '])
    
    // Palindromes are not case sensitive
    inputedString = inputedString.toLowerCase()
    
    // Sliding Window Algorithm, skipping over ignored values
    let L = 0
    let R = inputedString.length - 1
    while (L < R) {
        if (ignoredValues.has(inputedString[L])) {
            L++
            continue
        } else if (ignoredValues.has(inputedString[R])) {
            R--
            continue 
        }
        if (inputedString[L] !== inputedString[R]) {
            console.log(inputedString[L] + " " + inputedString[R])
            return false
        }
        L++
        R--
    }

    return true
}

