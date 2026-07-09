function Libro(titulo, genero, autor, prestado) {
    this.titulo = titulo;
    this.genero = genero;
    this.autor = autor;
    this.prestado = prestado = false;

    this.prestar = function () {
        if (this.prestado === false) {
            this.prestado = true;
            console.log(`\n se llevara le libro ${this.titulo} deseamos que disfrute su lectura`);
        } else {
            console.log(`\n Lo sentimos el libro ${this.titulo} lo tiene alguien en este momento`)
        }
    }

    this.devolver = function() {
        if (this.prestado === true) {
            this.prestado = false;
            console.log(`\n El libro ${this.titulo} fue devuelto correctamente. Esperamos que haya disfrutado su lectura`)
        } else {
            console.log(`\n El libro ${this.titulo} no estaba prestado`)
        }
    }
}

const harryPotter = new Libro("Harry Potter", "Fantasia", "J.K.Rowling");
const juegosHambre = new Libro("Los juegos del hambre", "Accion", "Suzanne Collins");

harryPotter.prestar()
harryPotter.prestar()
harryPotter.devolver()
harryPotter.devolver()
