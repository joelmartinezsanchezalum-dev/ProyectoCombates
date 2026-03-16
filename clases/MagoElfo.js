const { Personaje } = require("./Personaje");

class MagoElfo extends Personaje{

    vida 
    #poder
    #velocidad
    #nameAtaque1
    #nameAtaque2

    constructor(){
        this.vida = 40;
        this.#poder = 45;
        this.#velocidad = 15;
        this.#nameAtaque1 = " Bola de fuego "
        this.#nameAtaque2 = " Electrocutar "
    }

    ataque1(){
        return(this.#poder*1) 
    }
    ataque2(){
        let repeticiones = Math.random()*3+3
        return(((this.#poder*0.2)*(Math.round(repeticiones))))
    }

    #esquivar(){
        return(this.#velocidad)
    }

}
