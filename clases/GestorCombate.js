const { Paladin } = require("./Paladin.js");
const { MagoElfo } = require("./MagoElfo.js");
const { GuerreroEnano } = require("./GuerreroEnano.js");
const { ArqueroMedio } = require("./ArqueroMedio.js");

class GestorCombate {
    usuario
    maquina
    jugadores

    rapido

    partidaAcabada

    constructor(j1) {
        this.partidaAcabada = false;

        this.usuario = j1;
        this.maquina = this.#generarPersonajeRandom();

        this.jugadores = [this.usuario, this.maquina];

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
        let daño;
        let historial = [];

        for (let x = 0; x < this.jugadores.length; x++) {
            if (!this.jugadores[Number(!x)].esquivar()) {
                let numAtaque = Math.round(Math.random());
                daño = numAtaque ? this.jugadores[Number(x)].ataque1() : this.jugadores[x].ataque2();

                this.jugadores[Number(!x)].vida -= daño;
                if (daño == 0){
                    historial.push(`${this.jugadores[x].namePersonaje} ha recuperado ${this.jugadores[x].poder * 1.5} de vida`);
                    continue;
                }
                historial.push(`${this.jugadores[x].namePersonaje} ha causado ${daño} de daño a ${this.jugadores[Number(!x)].namePersonaje}`);
            } else {
                historial.push(`${this.jugadores[Number(!x)].namePersonaje} ha esquivado el ataque de ${this.jugadores[Number(x)].namePersonaje}`);
            };
        };
        // Comprobamos si alguno de los dos jugadores ha muerto
        (this.jugadores[0].vida == 0 || this.jugadores[1].vida == 0) ? this.partidaAcabada = true : this.partidaAcabada = false;

        return historial;
    };

    checkWin() {
        if (this.usuario.vida == 0 && this.maquina.vida >= 0) {
            return false;
        } else if (this.usuario.vida > 0 && this.maquina.vida == 0) {
            return true;
        };
    };

    imprimirResultado(resultado) {
        if (resultado) {
            console.log("¡Victoria!");
            console.log(`El ${this.usuario.namePersonaje} del jugador ha derrotado al ${this.maquina.namePersonaje} enemigo.`);
        } else {
            console.log("Derrota...");
            console.log(`El ${this.maquina.namePersonaje} enemigo ha derrotado al ${this.usuario.namePersonaje} del usuario.`);
        }
    };
<<<<<<< HEAD
=======

    mostrarSalud(){
        console.log(`Jugador: ${this.usuario.vida}`);
        console.log(`Enemigo: ${this.maquina.vida}`);

    }

    restaurarSalud(){
        this.usuario.vida = this.usuario.MAX_VIDA;
    }
>>>>>>> adri
};

module.exports.GestorCombate = GestorCombate;