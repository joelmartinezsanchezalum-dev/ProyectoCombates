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

    /**
     * @param {Boolean} partidaAcabada Estado partida
     * @param {Paladin | ArqueroMedio | GuerreroEnano | MagoElfo} j1 Personaje elegido por el usuario
     * @param {Paladin | ArqueroMedio | GuerreroEnano | MagoElfo} maquina Personaje elegido por la maquina 
     * @param {Paladin | ArqueroMedio | GuerreroEnano | MagoElfo} maquina Personaje elegido por laBoolean 
     * @param {Array} jugadores Los dos jugadores, el indice[0] sera el jugador mas rapido
     * @param {Boolean} rapido Estado para saber si el usuario es mas rapido que la maquina
     */
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
        let tipo = Math.floor(Math.random() * 4);
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

    /**
     * @returns {Boolean} Devuelve True si el personaje del usuario es mas rapido que el personaje de la maquina
     */
    #esJugadorMasRapido() {
        if (this.jugadores[0].velocidad > this.jugadores[1].velocidad) {
            return true;
        } else {
            return false;
        };
    };

    /**
     * Funcion en la cual se realiza una ronda, en la que los dos jugadores atacan, en el caso de que
     * el contricante no haya esquoivado.
     * 
     * Y comprovamos si alguno de los dos jugadores no han muerto.
     * 
     * @returns {Array} Devuelve una lista de movimientos de los dos jugadores en una ronda completa 
     */
    ataque() {
        let daño;
        let historial = [];

        for (let x = 0; x < this.jugadores.length; x++) {
            if (!this.jugadores[Number(!x)].esquivar()) {
                let numAtaque = Math.round(Math.random());
                daño = numAtaque ? this.jugadores[Number(x)].ataque1() : this.jugadores[x].ataque2();

                this.jugadores[Number(!x)].vida -= daño;
                if (daño == 0) {
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

    /**
     * 
     * @returns {boolean} Comprovamos el personaje del usuario a ganado
     */
    checkWin() {
        if (this.usuario.vida == 0 && this.maquina.vida >= 0) {
            return false;
        } else if (this.usuario.vida > 0 && this.maquina.vida == 0) {
            return true;
        };
    };

    /**
     * Procedimiento para mostrar un texto al usuario de quien ha ganado la partida
     */
    imprimirResultado(resultado) {
        if (resultado) {
            console.log("¡Victoria!");
            console.log(`El ${this.usuario.namePersonaje} del jugador ha derrotado al ${this.maquina.namePersonaje} enemigo.`);
        } else {
            console.log("Derrota...");
            console.log(`El ${this.maquina.namePersonaje} enemigo ha derrotado al ${this.usuario.namePersonaje} del usuario.`);
        }
    };

    /**
     * Procedimiento para mostrar la vida de los personajes
     */
    mostrarSalud() {
        console.log(`Jugador: ${this.usuario.vida}`);
        console.log(`Enemigo: ${this.maquina.vida}`);

    }

    /**
     * Procedimiento para restaurar la vida del usuario
     */
    restaurarSalud() {
        this.usuario.vida = this.usuario.MAX_VIDA;
    };

    /**
     * Procedimiento para mostrar los personajes en imagen ascoii
    */
    mostrarPersonajes() {
        const personajeUsuario = this.usuario.arteAscii(true);
        const personajeMaquina = this.maquina.arteAscii(false);

        let linea = "";

        for (let x = 0; x < personajeMaquina.length; x++) {

            linea = (personajeUsuario[x].slice(13, -4) + "            " + personajeMaquina[x].slice(13, -4));
            console.log(linea);
        };
        console.log("");
    };
};

module.exports.GestorCombate = GestorCombate;