const { Personaje } = require("./Personaje");

class GuerreroEnano extends Personaje {

<<<<<<< HEAD
=======
    MAX_VIDA;
>>>>>>> adri
    #namePersonaje;

    static nameAtaque1 = "Recuperar Aliento";
    static nameAtaque1 = "Hachazo";
    constructor() {
        super();

<<<<<<< HEAD
        this.#namePersonaje = "Guerrero Enano";

        this.vida = 90;
=======
        this.MAX_VIDA = 90;

        this.#namePersonaje = "Guerrero Enano";

        this.vida = this.MAX_VIDA;
>>>>>>> adri
        this.poder = 20;
        this.velocidad = 5;

    }

    get namePersonaje() {
        return this.#namePersonaje;
    }

    ataque1() {
        this.vida = (this.poder * 1.5) + this.vida;
        return 0;
    }
    ataque2() {
        return (this.poder);
    }
}

module.exports.GuerreroEnano = GuerreroEnano;
