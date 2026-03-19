const { Paladin } = require("./clases")
const fs = require("fs")
const { Personaje } = require("./clases/Personaje")

const prompt = require("prompt-sync")({ sigint: true })

// Menu principal 
function mostrarMenu() {
    console.log("Hola jugador, que personaje deseas ser? ")
    console.log("1- Paladin Humano")
    console.log("2- Mago Elfo ")
    console.log("3- Guerrero Enano")
    console.log("4- Arquero Mediano")
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
    fs.writeFileSync("./estadisticas.csv",informacion);
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
        victoria = Number(victoria)+1;
    } else {
        derrota = Number(derrota)+1;
    }
    partidas_jugadas = Number(partidas_jugadas)+1;
    informacion[I][1] = victoria;
    informacion[I][2] = derrota;
    informacion[I][3] = partidas_jugadas;
}

crearEstadisticas("Paladin", true)