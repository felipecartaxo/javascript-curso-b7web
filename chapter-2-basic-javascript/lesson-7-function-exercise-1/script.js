function calcPercent (x, y) {
    return (y / x) * 100;
}

let x = 80;
let y = 10;
let percent = calcPercent(x, y);

console.log(`${y} é ${percent}% de ${x}`);