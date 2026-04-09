const { Personaje } = require("./Personaje.js");
const fs = require("fs");

class Paladin extends Personaje {

    MAX_VIDA;
    #namePersonaje;

    static nameAtaque1 = "Ataque Divino";
    static nameAtaque2 = "Último Recurso";

    constructor() {
        super();
        this.MAX_VIDA = 75;

        this.#namePersonaje = "Paladin Humano";

        this.vida = this.MAX_VIDA;
        this.poder = 25;
        this.velocidad = 10;
    };

    get namePersonaje() {
        return this.#namePersonaje;
    };

    get namePersonaje() {
        return this.#namePersonaje;
    };

    ataque1() {
        this.vida += this.poder * 0.25;
        return (this.poder * 0.7)
    };

    ataque2() {
        this.vida -= this.poder * 0.5;
        return (this.poder * 1.25)
    };

    arteAscii() {
        const buffer = fs.readFileSync("./arteAscii/paladin.js");
        let contenido = buffer.toString().split("\n");
        return contenido;
    };
};

module.exports.Paladin = Paladin;