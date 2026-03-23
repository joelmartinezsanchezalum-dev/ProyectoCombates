const { Personaje } = require("./Personaje");

class GuerreroEnano extends Personaje {
    static nameAtaque1 = "Recuperar Aliento";
    static nameAtaque1 = "Hachazo";
    constructor() {
        super();
        
        this.vida = 90;
        this.poder = 20;
        this.velocidad = 5;
    }
    ataque1() {
        this.vida = (this.poder * 1.5) + this.vida;
    }
    ataque2() {
        return (this.poder)
    }
}

module.exports.GuerreroEnano = GuerreroEnano;
