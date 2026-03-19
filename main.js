const { GestorCombate } = require("./clases");
const { Paladin } = require("./clases");
const { MagoElfo } = require("./clases");
const { GuerreroEnano } = require("./clases");
const { ArqueroMedio } = require("./clases");

const prompt = require("prompt-sync")({ sigint: true });

// Menu principal 
function mostrarMenu() {
    console.clear();

    console.log("Bienvenido a ¡COMBATES AUTOMATICOS!\n");
    console.log("1. Crear nuevo personaje");
    console.log("2. Ver estadisticas");
    console.log("3. Luchar");
    console.log("4. Salir\n");
};

// Mostrar personajes
function mostrarPersonajes() {
    console.clear();

    console.log("Personajes disponibles:\n");
    console.log("1- Paladin Humano");
    console.log("2- Mago Elfo ");
    console.log("3- Guerrero Enano");
    console.log("4- Arquero Mediano\n");
};


let opcion;
let opcionPersonaje;
let personaje;

do {

    mostrarMenu();
    opcion = prompt("Que desas hacer: ");
    console.clear();

    if ("1234".includes(opcion)) {

        switch (opcion) {
            case "1":
                mostrarPersonajes();
                opcionPersonaje = prompt("Elige el personaje: ");

                switch (opcionPersonaje) {
                    case "1":
                        personaje = new Paladin();
                        break;
                    case "2":
                        personaje = new MagoElfo();
                        break;
                    case "3":
                        personaje = new GuerreroEnano();
                        break;
                    case "4":
                        personaje = new ArqueroMedio();
                        break;
                }

                break;

            case "2":
                prompt("Presiona ENTER para continuar");
                break;

            case "3":
                let gest = new GestorCombate(personaje);
                gest.ataque();
                prompt("Presiona ENTER para continuar");

                break;

            case "4":
                prompt("Saliendo...");
                break;
        }

    }
} while (opcion != 4);

