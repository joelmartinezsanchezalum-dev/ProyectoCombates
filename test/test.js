const prompt = require("prompt-sync")({ sigint: true });

let x = "|";
let z = "o";

let a = 1;
let b = 20;

lolete = setInterval(() => {
    console.clear();
    console.log(x + " ".repeat(a) + z + " ".repeat(b) + x);

    a++;
    b--;

    if (b === 0) {
        clearInterval(lolete);
    };

}, 250);