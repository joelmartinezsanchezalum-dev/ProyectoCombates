const { Personaje } = require("./Personaje.js");

class Paladin extends Personaje {

    #namePersonaje;

    static nameAtaque1 = "Ataque Divino";
    static nameAtaque2 = "Último Recurso";

    constructor() {
        super();

        this.#namePersonaje = "Paladin humano";

        this.vida = 75;
        this.poder = 25;
        this.velocidad = 10;
    }

    get namePersonaje() {
        return this.#namePersonaje;
    }

    ataque1() {
        this.vida += this.poder * 0.25;
        return (this.poder * 0.7)
    }

    ataque2() {
        this.vida -= this.poder * 0.5;
        return (this.poder * 1.25)
    }
}

module.exports.Paladin = Paladin;