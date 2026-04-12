const { Personaje } = require("./Personaje.js");
const fs = require("fs");

class Paladin extends Personaje {

    MAX_VIDA;

    static namePersonaje = "Paladin Humano";
    static nameAtaque1 = "Ataque Divino";
    static nameAtaque2 = "Último Recurso";

    /**
     * @param {Number} MAX_VIDA Vida maxima del personaje
     * @param {Number} vide Vida actual del personaje
     * @param {Number} poder Poder del personaje
     * @param {Number} velocidad Velocidad del personaje
     */
    constructor() {
        super();
        this.MAX_VIDA = 75;

        this.vida = this.MAX_VIDA;
        this.poder = 25;
        this.velocidad = 10;
    };

    /**
     *  GET para devolver el personaje
     * 
     * @returns {String} 
     */
    get namePersonaje() {
        return this.constructor.namePersonaje;
    };

    /**
     * Funcion que devuelve el daño de la habilidad
     * 
     * @returns {Number}
     */
    ataque1() {
        this.vida += this.poder * 0.25;
        return (this.poder * 0.7)
    };

    /**
     * Funcion que devuelve el daño de la habilidad
     * 
     * @returns {Number}
     */
    ataque2() {
        this.vida -= this.poder * 0.5;
        return (this.poder * 1.25)
    };

    /**
    * Funcion que devuelve el contenido del archivo del personaje en String
    * 
    * @param {boolean} jugador se utiliza para el arquero que apunte a la derecha o izquierda
    * 
    * @returns {String} Devuelve el contenido del archivo
    */
    arteAscii() {
        const buffer = fs.readFileSync("./arteAscii/paladin.js");
        let contenido = buffer.toString().split("\n");
        return contenido;
    };
};

module.exports.Paladin = Paladin;