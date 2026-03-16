const { Personaje } = require("./Personaje.js");

class Arquero extends Personaje {

    constructor() {
        super();

        this.vida = 50;
        this.poder = 30;
        this.velocidad = 20;

        this.nameAtaque1 = "Tiro preciso";
        this.nameAtaque1 = "Tiro multiple";
    };

    ataque1() {
        return this.poder;
    };

    ataque2() {
        const veces = Math.floor((Math.random()) * 3) + 1;
        return (this.poder * 0.5) * veces;
    }
};