const { Paladin } = require("./Paladin.js");
const { MagoElfo } = require("./MagoElfo.js");
const { GuerreroEnano } = require("./GuerreroEnano.js");
const { ArqueroMedio } = require("./ArqueroMedio.js");

class GestorCombate {
    jugadores

    victoria

    rapido

    constructor(j1) {
        this.victoria = false;

        this.jugadores = [j1, this.#generarPersonajeRandom()]

        this.rapido = this.#esJugadorMasRapido();

        if (!this.rapido) {
            this.jugadores.reverse();
        };
    };

    /**
     * Procedimiento que genera un personaje aleatorio de la clase Arquero, Guerrero, Mago o Paladín.
     * @returns Un personaje random de una de las 4 clases;
     */
    #generarPersonajeRandom() {
        let tipo = Math.floor(Math.random() * 3);
        let personaje;
        switch (tipo) {
            case 0:
                personaje = new Paladin();
                break;
            case 1:
                personaje = new MagoElfo();
                break;
            case 2:
                personaje = new GuerreroEnano();
                break;
            case 3:
                personaje = new ArqueroMedio();
                break;
        }
        return personaje;
    };

    #esJugadorMasRapido() {
        if (this.jugadores[0].velocidad > this.jugadores[1].velocidad) {
            return true;
        } else {
            return false;
        };
    };

    ataque() {
        for (let x = 0; x < this.jugadores.length; x++) {
            if (!this.jugadores[Number(!x)].esquivar()) {
                let numAtaque = Math.round(Math.random());
                let daño = numAtaque ? this.jugadores[Number(x)].ataque1() : this.jugadores[x].ataque2();

                this.jugadores[Number(!x)].vida -= daño;
                console.log("ha atacado");
            };
        };
        return;
    };


};

module.exports.GestorCombate = GestorCombate; 