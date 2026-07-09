function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.presentarse = function() {
        console.log(`¡Hola!, soy ${this.nombre}, un ${this.especie} de ${this.edad} y peso ${this.peso}.`)
    }
}

const perro = new Mascota("Po", "Perro", "3 Años", "12 Kg");
const loro = new Mascota("Lorenzo", "Loro", "12 Años", "0.5 Kg");
const gato = new Mascota("pepe", "Gato", "6 Años", "4 Kg");

perro.presentarse();
loro.presentarse();
gato.presentarse();
