const { Personaje } = require("./Personaje.js");

class ArqueroMedio extends Personaje {

    static nameAtaque1 = "Tiro preciso";
    static nameAtaque1 = "Tiro multiple";

    constructor() {
        super();

        this.vida = 50;
        this.poder = 30;
        this.velocidad = 20;
    };

    ataque1() {
        return this.poder;
    };

    ataque2() {
        const veces = Math.floor((Math.random()) * 3) + 1;
        return (this.poder * 0.5) * veces;
    }
};

module.exports.ArqueroMedio = ArqueroMedio;