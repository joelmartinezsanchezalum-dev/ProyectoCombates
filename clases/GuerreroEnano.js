const { Personaje } = require("./Personaje");
const fs = require("fs");

class GuerreroEnano extends Personaje {

    MAX_VIDA;

    static namePersonaje = "Guerrero Enano";
    static nameAtaque1 = "Recuperar Aliento";
    static nameAtaque2 = "Hachazo";

    /**
     * @param {Number} MAX_VIDA Vida maxima del personaje
     * @param {Number} vide Vida actual del personaje
     * @param {Number} poder Poder del personaje
     * @param {Number} velocidad Velocidad del personaje
     */
    constructor() {
        super();

        this.MAX_VIDA = 90;

        this.vida = this.MAX_VIDA;
        this.poder = 20;
        this.velocidad = 5;

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
        this.vida = (this.poder * 1.5) + this.vida;
        return 0;
    }

    /**
     * Funcion que devuelve el daño de la habilidad
     * 
     * @returns {Number}
     */
    ataque2() {
        return (this.poder);
    }
    
    /**
      * Funcion que devuelve el contenido del archivo del personaje en String
      * 
      * @param {boolean} jugador se utiliza para el arquero que apunte a la derecha o izquierda
      * 
      * @returns {String} Devuelve el contenido del archivo
      */
    arteAscii() {
        const buffer = fs.readFileSync("./arteAscii/guerrero.js");
        let contenido = buffer.toString().split("\n");
        return contenido;
    };
}

module.exports.GuerreroEnano = GuerreroEnano;
