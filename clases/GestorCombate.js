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
      * Funcion en la cual se realiza una ronda completa.
     * 
      * Los dos jugadores atacan por orden de velocidad, el ataque se elige de manera aleatoria
      * y en el historial se muestra quien ataca, que ataque usa y que ocurre en el turno.
      * 
      * Si el ataque tiene efecto propio como curacion, ese efecto se aplica aunque el rival esquive.
      * 
      * Al final comprobamos si alguno de los dos jugadores ha llegado a 0 de vida.
     * 
     * @returns {Array} Devuelve una lista de movimientos de los dos jugadores en una ronda completa 
     */
    ataque() {
        let daño;
        let historial = [];
        let rolAtacante;
        let rolDefensor;
        let nombreAtaque;

        for (let x = 0; x < this.jugadores.length; x++) {
            let numAtaque = Math.round(Math.random());
            let atacante = this.jugadores[x];
            let defensor = this.jugadores[Number(!x)];

            //Strings que contienenn el rol del atacante y defensor para mostrar en el historial, y el nombre del ataque que se va a usar
            rolAtacante = atacante == this.usuario ? "JUGADOR" : "ENEMIGO";
            rolDefensor = defensor == this.usuario ? "JUGADOR" : "ENEMIGO";
            nombreAtaque = numAtaque ? atacante.constructor.nameAtaque1 : atacante.constructor.nameAtaque2;

            daño = numAtaque ? atacante.ataque1() : atacante.ataque2();

            if (!defensor.esquivar()) {
                defensor.vida -= daño;
                if (daño == 0) {
                    historial.push("[" + rolAtacante + "] " + atacante.namePersonaje + " usa " + nombreAtaque + " y recupera " + (atacante.poder * 1.5) + " de vida");
                    continue;
                }
                historial.push("[" + rolAtacante + "] " + atacante.namePersonaje + " usa " + nombreAtaque + " y causa " + daño + " de daño a " + defensor.namePersonaje);
            } else {
                if (daño == 0) {
                    historial.push("[" + rolAtacante + "] " + atacante.namePersonaje + " usa " + nombreAtaque + " y recupera " + (atacante.poder * 1.5) + " de vida");
                    continue;
                }
                historial.push("[" + rolDefensor + "] " + defensor.namePersonaje + " esquiva " + nombreAtaque + " de " + atacante.namePersonaje);
            };
        };
        // Comprobamos si alguno de los dos jugadores ha muerto
        (this.jugadores[0].vida == 0 || this.jugadores[1].vida == 0) ? this.partidaAcabada = true : this.partidaAcabada = false;

        return historial;
    };

    /**
     * @returns {boolean} Devuelve true si el personaje del usuario ha ganado el combate
     */
    checkWin() {
        if (this.usuario.vida == 0 && this.maquina.vida >= 0) {
            return false;
        } else if (this.usuario.vida > 0 && this.maquina.vida == 0) {
            return true;
        };

        return false;
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
     * Procedimiento para mostrar la vida de los personajes con una barra sencilla
     * y la vida actual sobre la vida maxima.
     */
    mostrarSalud() {
        let barraJugador = "";
        let barraEnemigo = "";
        let vidaJugador = Math.round((this.usuario.vida / this.usuario.MAX_VIDA) * 20);
        let vidaEnemigo = Math.round((this.maquina.vida / this.maquina.MAX_VIDA) * 20);

        for (let i = 0; i < 20; i++) {
            if (i < vidaJugador) {
                barraJugador += "#";
            } else {
                barraJugador += "-";
            }
        }

        for (let i = 0; i < 20; i++) {
            if (i < vidaEnemigo) {
                barraEnemigo += "#";
            } else {
                barraEnemigo += "-";
            }
        }

        console.log("════════════════════════════════════════");
        console.log("         ESTADO DEL COMBATE");
        console.log("════════════════════════════════════════");
        console.log("JUGADOR: " + this.usuario.namePersonaje);
        console.log("[" + barraJugador + "] " + this.usuario.vida + "/" + this.usuario.MAX_VIDA);
        console.log("");
        console.log("ENEMIGO: " + this.maquina.namePersonaje);
        console.log("[" + barraEnemigo + "] " + this.maquina.vida + "/" + this.maquina.MAX_VIDA);
        console.log("════════════════════════════════════════");
        console.log("");
    }

    /**
     * Procedimiento para restaurar la vida del usuario
     */
    restaurarSalud() {
        this.usuario.vida = this.usuario.MAX_VIDA;
    };

    /**
     * Procedimiento para mostrar los personajes en arte ascii antes de cada ronda.
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