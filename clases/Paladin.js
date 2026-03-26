const { Personaje } = require("./Personaje.js");

class Paladin extends Personaje {

<<<<<<< HEAD
=======
    MAX_VIDA;
>>>>>>> adri
    #namePersonaje;

    static nameAtaque1 = "Ataque Divino";
    static nameAtaque2 = "Último Recurso";

    constructor() {
        super();
<<<<<<< HEAD

        this.#namePersonaje = "Paladin Humano";

        this.vida = 75;
=======
        this.MAX_VIDA = 75;

        this.#namePersonaje = "Paladin Humano";

        this.vida = this.MAX_VIDA;
>>>>>>> adri
        this.poder = 25;
        this.velocidad = 10;

    }

    get namePersonaje() {
        return this.#namePersonaje;
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