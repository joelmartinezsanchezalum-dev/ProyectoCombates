const { Personaje } = require("./Personaje");
const fs = require("fs");

class MagoElfo extends Personaje {

    static namePersonaje = "Mago Elfo";
    static nameAtaque1 = "Bola de fuego";
    static nameAtaque2 = "Electrocutar";

    /**
     * @param {Number} MAX_VIDA Vida maxima del personaje
     * @param {Number} vide Vida actual del personaje
     * @param {Number} poder Poder del personaje
     * @param {Number} velocidad Velocidad del personaje
     */
    constructor() {
        super();

        this.MAX_VIDA = 40;

        this.vida = this.MAX_VIDA;
        this.poder = 45;
        this.velocidad = 15;

    }

    /**
     *  GET para devolver el personaje
     * 
     * @returns {String} 
     */
    get namePersonaje() {
        return this.constructor.namePersonaje;
    }

    /**
     * Funcion que devuelve el daño de la habilidad
     * 
     * @returns {Number}
     */
    ataque1() {
        return (this.poder * 1)
    }

    /**
     * Funcion que devuelve el daño de la habilidad
     * 
     * @returns {Number}
     */
    ataque2() {
        let repeticiones = Math.random() * 3 + 3
        return (((this.poder * 0.2) * (Math.round(repeticiones))))
    }

    /**
    * Funcion que devuelve el contenido del archivo del personaje en String
    * 
    * @param {boolean} jugador se utiliza para el arquero que apunte a la derecha o izquierda
    * 
    * @returns {String} Devuelve el contenido del archivo
    */
    arteAscii() {
        const buffer = fs.readFileSync("./arteAscii/mago.js");
        let contenido = buffer.toString().split("\n");
        return contenido;
    };

};

module.exports.MagoElfo = MagoElfo;
