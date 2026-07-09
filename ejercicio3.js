function Estudiante(nombre, materia, nota) {
    this.nombre = nombre;
    this.materia = materia;
    this.nota = nota;

    this.ganada = nota >= 3.0;

    this.mostrarResultado = function() {
        if (this.ganada === true) {
            console.log(`\n hola ${this.nombre} pasaste la materia ${this.materia} con una nota de ${this.nota}. Felicitaciones`)
        } else {
            console.log(`\n hola ${this.nombre} no pasaste la materia ${this.materia} ya que tu nota fue ${this.nota}. sigue esforzandote`)
        }
    }
}

const simon = new Estudiante ("Simon", "Desarrollo movil", "4.5");
const daniel = new Estudiante ("Daniel", "Desarrollo web", "3.9");
const cristian = new Estudiante ("Cristian", "calculo integral", "2.9");

simon.mostrarResultado();
daniel.mostrarResultado();
cristian.mostrarResultado();