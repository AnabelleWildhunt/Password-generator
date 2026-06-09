const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/",]
let characters = letters
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let passNum = document.getElementById("password-numbers")
let passNumRev = document.getElementById("password-numbers-reversed")
let passNumTxt = document.getElementById("password-numbers-text")
let passSym = document.getElementById("password-symbols")
let passSymRev = document.getElementById("password-symbols-reversed")
let passSymTxt = document.getElementById("password-symbols-text")
let passLen = document.getElementById("password-lenght")
let wheelA = document.getElementById("wh1")
let wheelB = document.getElementById("wh2")
let wheelC = document.getElementById("wh3")
let wheelD = document.getElementById("wh4")
let wheelE = document.getElementById("wh5")
let wheelF = document.getElementById("wh6")
let wheelG = document.getElementById("wh7")
let wheelH = document.getElementById("wh8")
let length = 15
let passwordExist = false

passLen.addEventListener("input", function(){
    length = parseInt(passLen.value)
    longitudoDenota()
})

function longitudoDenota() {
    if (length >= 11 && length <= 18) {
        length = length
    } else {
        length = 15
    }
}
passNum.addEventListener("change", function() {
    passNumTxt.textContent = this.checked ? "NUMBERS ON" : "NUMBERS OFF";
    fiatCodex()
})

passSym.addEventListener("change", function() {
    passSymTxt.textContent = this.checked ? "SYMBOLS ON" : "SYMBOLS OFF";
    fiatCodexDuo()
})

function fiatCodex() {
    characters = letters

    if (passNum.checked){
        for (i = 0; i < numbers.length; i++){
            characters.push(numbers[i])
        }
    } else {
        for (i = 0; i < numbers.length; i++){
            characters.pop(numbers[i])
        }
    }
}

function fiatCodexDuo(){
    if (passSym.checked){
        for (i = 0; i < symbols.length; i++){
            characters.unshift(symbols[i])
        }
    } else {
        for (i = 0; i < symbols.length; i++){
            characters.shift(symbols[i])
        }
    }
}

function fiatLitera() {
    let a = Math.floor(Math.random() * characters.length)
    let letter = characters[a]
    return letter
}

function fiatVerbum() {
    for (let i = 1; i < (length + 1); i++) {
        passOne.textContent += fiatLitera()
        passTwo.textContent += fiatLitera()
        passwordExist = true
    }
}

function fiatLux() {
    wheelA.style.animation = "none"
    wheelB.style.animation = "none"
    wheelC.style.animation = "none"
    wheelD.style.animation = "none"
    wheelE.style.animation = "none"
    wheelF.style.animation = "none"
    wheelG.style.animation = "none"
    wheelH.style.animation = "none"
    passOne.style.animation = "none"
    passTwo.style.animation = "none"
    void wheelA.offsetWidth
    void wheelB.offsetWidth
    void wheelC.offsetWidth
    void wheelD.offsetWidth
    void wheelE.offsetWidth
    void wheelF.offsetWidth
    void wheelG.offsetWidth
    void wheelH.offsetWidth
    void passOne.offsetWidth
    void passTwo.offsetWidth
    wheelA.style.animation = "neo 5s linear"
    wheelB.style.animation = "neo 5s linear"
    wheelC.style.animation = "neo 5s linear"
    wheelD.style.animation = "neo 5s linear"
    wheelE.style.animation = "neo 5s linear"
    wheelF.style.animation = "neo 5s linear"
    wheelG.style.animation = "neo 5s linear"
    wheelH.style.animation = "neo 5s linear"
    passOne.style.animation = "password-appears 2s linear 3s"
    setTimeout(() => {passOne.style.opacity = "1"}, 5000)
    passTwo.style.animation = "password-appears 2s linear 3s"
    setTimeout(() => {passTwo.style.opacity = "1"}, 5000)
}

function verbum() {
    if (passwordExist === false) {
        fiatVerbum()
        fiatLux()
        passwordExist = true
    } else {
        passOne.style.opacity = "0"
        passTwo.style.opacity = "0"
        passOne.textContent = null
        passTwo.textContent = null
        fiatVerbum()
        fiatLux()
    }
}

function focusUnus() {
    passOne.style.animation = "none"
    void passOne.offsetWidth
    passOne.style.animation = "focus 0.5s linear"
    navigator.clipboard.writeText(passOne.textContent)
}

function focusDuo() {
    passTwo.style.animation = "none"
    void passTwo.offsetWidth
    passTwo.style.animation = "focus 0.5s linear"
    navigator.clipboard.writeText(passTwo.textContent)
}