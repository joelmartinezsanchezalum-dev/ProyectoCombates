const { Paladin, MagoElfo, GuerreroEnano, ArqueroMedio } = require("./clases")
const prompt = require("prompt-sync")({ sigint: true })

// Menu principal 
function mostrarPersonajes() {
    console.clear();

    console.log("Personajes disponibles:\n");
    console.log("1- Paladin Humano");
    console.log("2- Mago Elfo ");
    console.log("3- Guerrero Enano");
    console.log("4- Arquero Mediano\n");
};

function mostrarMenu() {
    console.clear();

    console.log("Bienvenido a ¡COMBATES AUTOMATICOS!\n");
    console.log("1. Crear nuevo personaje");
    console.log("2. Ver estadisticas");
    console.log("3. Luchar");
    console.log("4. Salir\n");
};

let opcion;
let opcionPersonaje;

do {

    mostrarMenu();
    opcion = prompt("Que desas hacer: ");
    console.clear();

    if ("1234".includes(opcion)) {

        switch (opcion) {
            case "1":
                mostrarPersonajes();
                opcionPersonaje = prompt("Elige el personaje: ");

                prompt("Presiona ENTER para continuar");
                break;

            case "2":

                prompt("Presiona ENTER para continuar");
                break;

            case "3":

                prompt("Presiona ENTER para continuar");
                break;

            case "4":
                prompt("Saliendo...");
                break;
        }

    }
} while (opcion != 4);

function luchar(jugador1) {

    //Generamos enemigo y calculamos prioridad
    let jugador2 = generarPersonajeRandom();
    let primeroEnAtacar = esJugadorMasRapido(jugador1, jugador2);
    let daño;

    //Miramos el primero en atacar y guardamos el daño que haga un ataque aleatorio
    if (primeroEnAtacar) {
        let numAtaque = Math.round(Math.random());
        daño = numAtaque ? jugador1.ataque1() : jugador1.ataque2();
    } else {
        let numAtaque = Math.round(Math.random());
        daño = numAtaque ? jugador2.ataque1() : jugador2.ataque2();
    }

    //Miramos si esquiva el enemigo, y le hacemos daño si no lo consigue
}

function esJugadorMasRapido(j0, j1) {
    if (j0.velocidad > j1.velocidad) {
        return true;
    } else {
        return false;
    }
}

/**
 * Procedimiento que genera un personaje aleatorio de la clase Arquero, Guerrero, Mago o Paladín.
 * @returns Un personaje random de una de las 4 clases;
 */
function generarPersonajeRandom() {
    let tipo = Math.round(Math.random() * 3);
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
}
