const { Personaje } = require("./Personaje.js");
const fs = require("fs");

class ArqueroMedio extends Personaje {

    MAX_VIDA;
    #namePersonaje

    static nameAtaque1 = "Tiro preciso";
    static nameAtaque1 = "Tiro multiple";

    /**
     * @param {Number} MAX_VIDA Vida maxima del personaje
     * @param {Number} vide Vida actual del personaje
     * @param {Number} poder Poder del personaje
     * @param {Number} velocidad Velocidad del personaje
     * @param {String} namePersonaje Nombre del personaje
     */
    constructor() {
        super();
        this.MAX_VIDA = 50;

        this.#namePersonaje = "Arquero Medio";

        this.vida = this.MAX_VIDA;
        this.poder = 30;
        this.velocidad = 20;

    };

    /**
     *  GET para devolver el personaje
     * 
     * @returns {String} 
     */
    get namePersonaje() {
        return this.#namePersonaje;
    }

    /**
     * Funcion que devuelve el daño de la habilidad
     * 
     * @returns {Number}
     */
    ataque1() {
        return this.poder;
    };

    /**
     * Funcion que devuelve el daño de la habilidad
     * 
     * @returns {Number}
     */
    ataque2() {
        const veces = Math.floor((Math.random()) * 3) + 1;
        return (this.poder * 0.5) * veces;
    }

    /**
     * Funcion que devuelve el contenido del archivo del personaje en String
     * 
     * @param {boolean} jugador se utiliza para el arquero que apunte a la derecha o izquierda
     * 
     * @returns {String} Devuelve el contenido del archivo
     */
    arteAscii(jugador) {
        let buffer;

        if (jugador) {
            buffer = fs.readFileSync("./arteAscii/arqueroDr.js");
        } else {
            buffer = fs.readFileSync("./arteAscii/arqueroIz.js");
        };

        let contenido = buffer.toString().split("\n");
        return contenido;
    };
};

module.exports.ArqueroMedio = ArqueroMedio;