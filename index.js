// Code your solutions in this file
function printBadges(arr) {
    for (let i = 0; i <= (arr.length - 1); i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
    }
    return arr
}

function tailsNeverFails() {
    let i = 0
    let flip = () => Math.floor((Math.random() * 2))
    while (flip() === 1) {
       i++
    }
    return `You got ${i} tails in a row!`
}
