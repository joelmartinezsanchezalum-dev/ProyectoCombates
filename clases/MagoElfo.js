const { Personaje } = require("./Personaje");

class MagoElfo extends Personaje {
    static nameAtaque1 = "Bola de fuego";
    static nameAtaque1 = "Electrocutar";

    constructor() {
<<<<<<< HEAD
=======
        super();

>>>>>>> adri
        this.vida = 40;
        this.poder = 45;
        this.velocidad = 15;
    }

    ataque1() {
        return (this.poder * 1)
    }
    ataque2() {
        let repeticiones = Math.random() * 3 + 3
        return (((this.poder * 0.2) * (Math.round(repeticiones))))
    }

    #esquivar() {
        return (this.velocidad)
    }

};

module.exports.MagoElfo = MagoElfo;
