const { Personaje } = require("./Personaje");

class MagoElfo extends Personaje {

    #namePersonaje;

    static nameAtaque1 = "Bola de fuego";
    static nameAtaque1 = "Electrocutar";

    constructor() {
        super();

        this.MAX_VIDA = 40;
        
        this.#namePersonaje = "Mago Elfo";

        this.vida = this.MAX_VIDA;
        this.poder = 45;
        this.velocidad = 15;

    }

    get namePersonaje() {
        return this.#namePersonaje;
    }

    ataque1() {
        return (this.poder * 1)
    }
    ataque2() {
        let repeticiones = Math.random() * 3 + 3
        return (((this.poder * 0.2) * (Math.round(repeticiones))))
    }

};

module.exports.MagoElfo = MagoElfo;
