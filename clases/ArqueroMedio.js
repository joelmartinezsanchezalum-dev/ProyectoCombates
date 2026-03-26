const { Personaje } = require("./Personaje.js");

class ArqueroMedio extends Personaje {
    
    MAX_VIDA; 
    #namePersonaje

    static nameAtaque1 = "Tiro preciso";
    static nameAtaque1 = "Tiro multiple";

    constructor() {
        super();
        this.MAX_VIDA = 50;

        this.#namePersonaje = "Arquero Medio";

        this.vida = this.MAX_VIDA;
        this.poder = 30;
        this.velocidad = 20;

    };

    get namePersonaje() {
        return this.#namePersonaje;
    }

    ataque1() {
        return this.poder;
    };

    ataque2() {
        const veces = Math.floor((Math.random()) * 3) + 1;
        return (this.poder * 0.5) * veces;
    }
};

module.exports.ArqueroMedio = ArqueroMedio;