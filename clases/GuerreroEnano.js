const { Personaje } = require("./Personaje");

class GuerreroEnano extends Personaje{

    vida 
    poder
    velocidad
    nameAtaque1
    nameAtaque2

    constructor(){
        this.vida = 90;
        this.poder = 20;
        this.velocidad = 5;
        this.nameAtaque1 = " Recuperar Aliento "
        this.nameAtaque2 = " Hachazo "
    }
    ataque1(){
        this.vida = (this.poder*1.5)+this.vida;
    }
    ataque2(){
        return (this.poder)
    }   
}
