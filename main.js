const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });

const { GestorCombate } = require("./clases");
const { Paladin } = require("./clases");
const { MagoElfo } = require("./clases");
const { GuerreroEnano } = require("./clases");
const { ArqueroMedio } = require("./clases");

// Menu principal 
function mostrarMenu() {
    console.clear();

    console.log("Bienvenido a ¡COMBATES AUTOMATICOS!\n");
    console.log("1. Crear nuevo personaje");
    console.log("2. Ver estadisticas");
    console.log("3. Luchar");
    console.log("0. Salir\n");
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

function verEstadisticas() {
    if (!fs.existsSync("./estadisticas.csv")) {
        fs.writeFileSync("./estadisticas.csv", "PERSONAJE;VICTORIAS;DERROTAS;PARTIDAS_JUGADAS\nPaladin;0;0;0\nGuerreroEnano;0;0;0\nMagoElfo;0;0;0\nArqueroMedio;0;0;0")
        verEstadisticas()
    } else {
        let buffer = fs.readFileSync("./estadisticas.csv")
        let informacion = buffer.toString().split(/\r?\n/).join("\n")
        console.log(informacion)
    }
}

function crearEstadisticas(personaje, resultado) {
    verEstadisticas()
    let buffer = fs.readFileSync("./estadisticas.csv");
    let informacion = buffer.toString().split("\n");
    for (let i = 0; i < 5; i++) {
        informacion[i] = informacion[i].split(";");
    }
    asignacion(personaje, informacion, resultado)
    for (let i = 0; i < 5; i++) {
        informacion[i] = informacion[i].join(";");
    }
    informacion = informacion.join("\n")
    fs.writeFileSync("./estadisticas.csv", informacion);
}

function asignacion(personaje, informacion, resultado) {
    let victoria = 0;
    let derrota = 0;
    let partidas_jugadas = 0;
    let I = 0;
    if (personaje == "Paladin") {
        I = 1;
    } else if (personaje == "GuerreroEnano") {
        I = 2;
    } else if (personaje == "MagoElfo") {
        I = 3;
    } else if (personaje == "ArqueroMedio") {
        I = 4;
    }
    victoria = informacion[I][1];
    derrota = informacion[I][2];
    partidas_jugadas = informacion[I][3];
    if (resultado == true) {
        victoria = Number(victoria) + 1;
    } else {
        derrota = Number(derrota) + 1;
    }
    partidas_jugadas = Number(partidas_jugadas) + 1;
    informacion[I][1] = victoria;
    informacion[I][2] = derrota;
    informacion[I][3] = partidas_jugadas;
}

let opcion;
let opcionPersonaje;
let personaje;
let resultado;

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
                verEstadisticas();
                prompt("Presiona ENTER para continuar");
                break;

            case "3":
                if (typeof (personaje) == undefined) return;

                //Creamos el gestor, que nos pone un contrincante aleatorio
                let gestor = new GestorCombate(personaje);

                do {
                    //El gestor genera un turno de ataques (ataque aleatorio, ataca el más rápido primero)
                    let historial = gestor.ataque();
                    console.log(historial);

                    prompt("Presiona ENTER para continuar");          
                } while (!gestor.victoria);
                
                resultado = gestor.checkWin();
                crearEstadisticas(personaje, resultado);

                gestor.imprimirResultado(resultado);
                prompt("Presiona ENTER para volver al menu");

                break;

            case "0":
                prompt("Saliendo...");
                break;
        }

    }
} while (opcion != 0);