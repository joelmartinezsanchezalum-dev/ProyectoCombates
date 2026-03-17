const { Paladin, MagoElfo, GuerreroEnano, ArqueroMedio } = require("./clases");
const prompt = require("prompt-sync")({ sigint: true });

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
                let jugador2 = generarPersonajeRandom();

                do {

                } while (vida > 0);

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


function luchar(jugador) {

    //Generamos enemigo y calculamos prioridad
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