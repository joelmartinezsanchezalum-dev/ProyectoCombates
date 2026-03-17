class Personaje {

    #vida
    #poder
    #velocidad

    #nameAtaque1
    #nameAtaque2

    constructor() { }

    get vida() {
        return this.#vida;
    };

    get poder() {
        return this.#poder;
    };

    get velocidad() {
        return this.#velocidad;
    };

    get nameAtaque1() {
        return this.#nameAtaque1;
    };

    get nameAtaque2() {
        return this.#nameAtaque2;
    };

    set vida(vida) {
        this.#vida = vida;
    }

    set poder(poder) {
        this.#poder = poder;
    }

    set velocidad(velocidad) {
        this.#velocidad = velocidad;
    }

    set nameAtaque1(nameAtaque1) {
        this.#nameAtaque1 = nameAtaque1;
    }

    set nameAtaque2(nameAtaque2) {
        this.#nameAtaque2 = nameAtaque2;
    }

    ataque1() { };
    ataque2() { };

    esquivar() {
        let dodge = (Math.random() * 100);
        dodge = (dodge <= this.velocidad);
        return dodge;
    };
};

module.exports.Personaje = Personaje;