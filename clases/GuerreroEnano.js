const { Personaje } = require("./Personaje");

class GuerreroEnano extends Personaje {

    #namePersonaje;

    static nameAtaque1 = "Recuperar Aliento";
    static nameAtaque1 = "Hachazo";

    constructor() {
        super();

        this.#namePersonaje = "Guerrero Enano";

        this.vida = 90;
        this.poder = 20;
        this.velocidad = 5;
    };

    get namePersonaje() {
        return this.#namePersonaje;
    };

    ataque1() {
        this.vida = (this.poder * 1.5) + this.vida;
<<<<<<< HEAD
    };
    
    ataque2() {
        return (this.poder);
    };
=======
        return 0;
    }
    ataque2() {
        return (this.poder);
    }
>>>>>>> b2dd0051c0d815c5ff26fcbdec020bd07e236cf4
}

module.exports.GuerreroEnano = GuerreroEnano;