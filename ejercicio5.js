const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, precio, anio, stock) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.anio = anio;
    this.stock = stock;

    this.registrarVehiculo = function() {
        console.log(`El vehiculo ${this.marca} ${this.modelo} del año ${this.anio} fue registrado correctamente`)
    }

    this.venderVehiculo = function() {
        if (this.stock > 0) {
            this.stock = this.stock - 1;
            console.log(`Se vendio un vehiculo marca: ${this.marca} \n modelo ${this.modelo} \n del año ${this.anio}. Nos quedan ${this.stock} en el concesionario.`)
        } else {
            console.log(`no hay unidad es disponibles del vehiculo ${this.marca} ${this.modelo} del año${this.anio} actualmente el stock`)
        }
    }

    this.seguro = function() {
        console.log(`El vehiculo ${this.marca} ${this.modelo} ${this.anio} puede acceder a un plan de seguro ofrecido por el concesionario`);
    }
}

//||------Primer vehiculo------||//
let marca1 = prompt("Ingrese por favor la marca del primer vehiculo ");
let modelo1 = prompt("Ingrese por favor el modelo del primer vehiculo ");
let anio1 = Number(prompt("Ingrese por favor el año del primer vehiculo "));
let precio1 = Number(prompt("Ingrese por favor el precio del primer vehiculo "));
let stock1 = Number(prompt("Ingrese por favor el stock primer vehiculo "));


//||------segundo vehiculo------||//
let marca2 = prompt("Ingrese por favor la marca del segundo vehiculo ");
let modelo2 = prompt("Ingrese por favor el modelo del segundo vehiculo ");
let anio2 = Number(prompt("Ingrese por favor el año del segundo vehiculo "));
let precio2 = Number(prompt("Ingrese por favor el precio del segundo vehiculo "));
let stock2 = Number(prompt("Ingrese por favor el stock segundo vehiculo "));


//||------tercer vehiculo------||//
let marca3 = prompt("Ingrese por favor la marca del tercer vehiculo ");
let modelo3 = prompt("Ingrese por favor el modelo del tercer vehiculo ");
let anio3 = Number(prompt("Ingrese por favor el año del tercer vehiculo "));
let precio3 = Number(prompt("Ingrese por favor el precio del tercer vehiculo "));
let stock3 = Number(prompt("Ingrese por favor el stock tercer vehiculo "));

const vehiculo1 = new Vehiculo(marca1, modelo1, precio1, anio1, stock1);
const vehiculo2 = new Vehiculo(marca2, modelo2, precio2, anio2, stock2);
const vehiculo3 = new Vehiculo(marca3, modelo3, precio3, anio3, stock3);

console.log("\n ||------Primer vehiculo------ ||")
vehiculo1.registrarVehiculo();
vehiculo1.venderVehiculo();
vehiculo1.seguro();

console.log("\n ||------Segundo vehiculo------ ||")
vehiculo2.registrarVehiculo();
vehiculo2.venderVehiculo();
vehiculo2.seguro();

console.log("\n ||------Tercer vehiculo------ ||")
vehiculo3.registrarVehiculo();
vehiculo3.venderVehiculo();
vehiculo3.seguro();