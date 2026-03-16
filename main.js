const prompt = require("prompt-sync")({ sigint: true })

// Menu principal 
function mostrarMenu() {
    console.log("Hola jugador, que personaje deseas ser? ")
    console.log("1- Paladin Humano")
    console.log("2- Mago Elfo ")
    console.log("3- Guerrero Enano")
    console.log("4- Arquero Mediano")
}