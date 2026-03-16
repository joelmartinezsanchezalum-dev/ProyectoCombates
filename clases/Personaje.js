class Personaje {
    vida
    poder
    velocidad

    nameAtaque1
    nameAtaque2

    constructor() { }

    ataque1() { }
    ataque2() { }

    esquivar() {
        let dodge = (Math.random() * 100)
        dodge = (dodge <= this.velocidad)
        return dodge;
    }
}

module.exports.Personaje = Personaje;