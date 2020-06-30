const text = document.getElementById("text")
const bot = document.getElementById("bot")
const a = new Audio("site/wav/1.wav")
const b = new Audio("site/wav/2.wav")
const c = new Audio("site/wav/3.wav")
const d = new Audio("site/wav/4.wav")
const e = new Audio("site/wav/5.wav")
const f = new Audio("site/wav/6.wav")
const g = new Audio("site/wav/7.wav")
const h = new Audio("site/wav/8.wav")
const i = new Audio("site/wav/9.wav")

function ohYes() {
    text.innerHTML = ""
    bot.setAttribute("src", "site/imgs/talk.gif")
    let str = tweet();
    console.log(str)
    str = str.toUpperCase()
    let words = str.split(" ")
    console.log(words)
    metta(words)
}

function metta(words) {
    let i = 0
    let x = 0
    let z = words.length
    speak(i, z)
    function speak() {
        let word = words[x]
        if (word === ".") {
            let audio = d
            text.append(". ")
            audio.play()
        } else {
            let audio = soundPicker(x)
            text.append(word + " ")
            audio.play()
        }
        i++;
        x++;
        if (i < z) {
            setTimeout(speak, 100);
        } else {
            bot.setAttribute("src", "site/imgs/idle.gif")
        }
    }
}


function soundPicker() {
    let x = Math.floor(Math.random() * 9);
    if (x == 0) {
        return a
    } else if (x == 1) {
        return b
    } else if (x == 2) {
        return c
    } else if (x == 3) {
        return d
    } else if (x == 4) {
        return e
    } else if (x == 5) {
        return f
    } else if (x == 6) {
        return g
    } else if (x == 7) {
        return h
    } else return i
}

document.addEventListener('keydown', ohYes)
document.addEventListener('click', ohYes)