const { Paladin } = require("./clases")
const fs = require("fs")

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
        fs.writeFileSync("./estadisticas.csv","")
        verEstadisticas()
    } else {
        let buffer = fs.readFileSync("./estadisticas.csv")
        let informacion = buffer.toString().split(/\r?\n/).join("\n")
        console.log(informacion)
    }
}
function crearEstadisticas(boleano){
    let victoria = Number
    let derrota = Number
    let partidasJugadas = Number
    if (boleano == true){
        fs.appendFileSync("./estadisticas.csv",(victoria+1)+";"+derrota+";"+(partidasJugadas+1))
    }else {        fs.appendFileSync("./estadisticas.csv",victoria+";"+(derrota+1)+";"+(partidasJugadas+1))
}
}
verEstadisticas()