function lemongrab() {
    let L = Math.floor(Math.random() * 3)
    if (L === 0) {
        let a = Math.floor(Math.random() * 6)
        if (a === 0) {
            let reply = "all your fault!!!!"
            return reply
        } else if (a === 1) {
            let reply = "ALL YOUR FAULT!!!"
            return reply
        } else if (a === 2) {
            let reply = "this is all YOUR fault!!"
            return reply
        } else if (a === 3) {
            let reply = "THIS IS ALL YOUR FAULT!!"
            return reply
        } else if (a === 4) {
            let reply = "this is all your fault!!!!!!"
            return reply
        } else if (a === 5) {
            let reply = "all your faULT!!!!!!!!"
            return reply
        } return reply
    } else if (L === 1) {
        let a = Math.floor(Math.random() * 5)
        if (a === 0) {
            let reply = "you made me!!!"
            return reply
        } else if (a === 1) {
            let reply = "YOU MADE MEEEE!!!!!"
            return reply
        } else if (a === 2) {
            let reply = "YOU MADE ME!!"
            return reply
        } else if (a === 3) {
            let reply = "YOOOOOOU MADE MEE!!!!!"
            return reply
        } else if (a === 4) {
            let reply = "yooooooou maade MEE!!"
            return reply
        } return reply
    } else if (L === 2) {
        let a = Math.floor(Math.random() * 3)
        if (a === 0) {
            let reply = "YOU MADE ME LIKE THIS, ITS ALL YOUR FAULT!!!!"
            return reply
        } else if (a === 1) {
            let reply = "i am alone and you made me like this"
            return reply
        } else if (a === 2) {
            let reply = "i am ALONE and you made me like this!!!!!"
            return reply
        } return reply
    }
}

module.exports = {
    lemongrab
}