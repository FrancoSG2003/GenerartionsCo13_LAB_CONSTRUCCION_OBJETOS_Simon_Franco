function Computador(marca, procesador, ram, precio) {

    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const lenovo = new Computador("lenovo", "intel core i5", "16GB", "$ 2599070");
const hp = new Computador("hp", "intel core ultra 5", "8GB", "$ 2099070");
const asus = new Computador("Asus", "AMD Ryzen 7", "16GB", "$ 5799050");

console.log(lenovo);
console.log(hp);
console.log(asus);