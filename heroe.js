function Heroe(nombre, clase) {
    this.nombre = nombre;
    this.clase = clase;
    this.saludar = function() {
        console.log(`saludos soy ${this.nombre} el ${this.clase}.`)
    }
}

const guerrero = new Heroe("Aragon", "Guerrero");

guerrero.saludar();
