const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, precio, anio, stock) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.anio = anio;
    this.stock = stock;

    this.registrarVehiculo = function() {
        console.log(`\n El vehiculo ${this.marca} ${this.modelo} del año ${this.anio} fue registrado correctamente`)
    }

    this.venderVehiculo = function() {
        if (this.stock > 0) {
            this.stock = this.stock - 1;
            console.log(`\n Se vendio un vehiculo marca: ${this.marca} \n modelo ${this.modelo} \n del año ${this.anio}. Nos quedan ${this.stock} en el concesionario.`)
        } else {
            console.log(`\n no hay unidad es disponibles del vehiculo ${this.marca} ${this.modelo} del año${this.anio} actualmente el stock`)
        }
    }

    this.seguro = function() {
        console.log(`\n El vehiculo ${this.marca} ${this.modelo} ${this.anio} puede acceder a un plan de seguro ofrecido por el concesionario`);
    }
}

let vehiculos = [];

for (let i = 0; i < 3; i++) {

    let marca = prompt("Ingrese por favor la marca del vehiculo ");
    let modelo = prompt("Ingrese por favor el modelo del vehiculo ");
    let anio = Number(prompt("Ingrese por favor el año del vehiculo "));
    let precio = Number(prompt("Ingrese por favor el precio del vehiculo "));
    let stock = Number(prompt("Ingrese por favor el stock vehiculo "));

    let vehiculo = new Vehiculo(marca, modelo, precio, anio, stock);
    vehiculos.push(vehiculo);

}


for (let i = 0; i < vehiculos.length; i++) {
    console.log(`\n ||------Vehiculo ${i + 1}------ ||`);
    vehiculos[i].registrarVehiculo();
    vehiculos[i].venderVehiculo();
    vehiculos[i].seguro();

}
