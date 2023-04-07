
const iva = 1.21
let total = 0
let totalIva = 0
/*Declaracion de constructor, muestra también con "mostrarInfo" el producto ingresado */
class Producto {
    constructor(nombre, stock, precio) {
        this.nombre = nombre;
        this.stock = parseInt(stock);
        this.precio = parseFloat(precio);
        this.mostrarInfo = () => {
            return "nombre " + this.nombre + " stock: " + this.stock + " precio: $" + this.precio
        }
        this.vender = (cant) => {
            if (cant <= this.stock) {
                this.stock = this.stock - cant;
                return "debe abonar :" + this.precio * cant * iva
            } else {
                return 'no hay stock';
            }
        }
    }
}

let producto1 = new Producto("ak47", 10, 2500);
let producto2 = new Producto("m4a1", 5, 3100);
let producto3 = new Producto("desert eagle", 22, 700);
let producto4 = new Producto("awp", 10, 5700);
let producto5 = new Producto("chaleco", 100, 1000);
let producto6 = new Producto("granada he", 25, 300);
let producto7 = new Producto("granada sg", 13, 200);


const arrProd = [producto1, producto2, producto3, producto4, producto5, producto6, producto7];


/* for (let i = 0; i < arrProd.length; i++) {
    console.log(arrProd[i]);

} */

/* let nombreUsuario = prompt("ingrese su nombre: ");
let edadUsuario = parseFloat(prompt("ingrese su edad: "));
if (edadUsuario >= 18) {

    let mensaje = 'Elegir un producto de la lista para agergar:\n';
    for (let i = 0; i < arrProd.length; i++) {
        mensaje += `${i + 1}. ${arrProd[i].nombre}\n`;
    }

    let opcion = prompt(mensaje);
    if (opcion !== null && !isNaN(opcion) && opcion >= 1 && opcion <= arrProd.length) {
        let selecUsuario = arrProd[opcion - 1];
        alert("ha seleccionado: " + selecUsuario.nombre + " " + "$" + selecUsuario.precio);
        let cantUsuario = (prompt("cuantas unidades desea llevar?"));
        console.log("el precio parcial a abonar seria de: " + cantUsuario * selecUsuario.precio * iva);
    } else {
        console.log('opción invalid.');
    }

} else {
    alert('usted es menor de edad, no tiene permitido comprar');
} */

let Producto8 = new Producto ("Botas", 77, 10);
arrProd.push (Producto8);

console.table(arrProd);


