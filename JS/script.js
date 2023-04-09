
const iva = 1.21
let total = 0
/*Declaracion de funcion constructor de objetos, muestra también con "mostrarInfo" el producto ingresado */
class Producto {
    constructor(nombre, stock, precio) {
        this.nombre = nombre;
        this.stock = parseInt(stock);
        this.precio = parseFloat(precio);
        this.mostrarInfo = () => {
            return "nombre " + this.nombre + " stock: " + this.stock + " precio: $" + this.precio
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

/* let nombreUsuario = prompt("ingrese su nombre");
alert("Bienvenido" + " " + nombreUsuario); */
let edadUsuario = parseInt(prompt("ingrese su edad"));
if (edadUsuario < 18) {
    alert("Usted no puede comprar un arma: es menor de edad");
} else {
    do {
        let mensaje = 'Elegir un producto de la lista para agergar:\n';
        for (let i = 0; i < arrProd.length; i++) {
            mensaje += `${i + 1}. ${arrProd[i].nombre}\n`;
        }
        mensaje += `${arrProd.length + 1}. Salir\n`;
        mensaje += `${arrProd.length + 2}. Finalizar Compra\n`;
        opcion = prompt(mensaje);
        if (opcion !== null && !isNaN(opcion) && opcion >= 1 && opcion <= arrProd.length) {
            let selecUsuario = arrProd[opcion - 1];
            alert("ha seleccionado: " + selecUsuario.nombre + " " + "$" + selecUsuario.precio + " " + "// stock: " + selecUsuario.stock);
            let cantUsuario = parseFloat(prompt("cuantas unidades desea llevar?"));
            if (cantUsuario > selecUsuario.stock) {
                alert("tenemos en stock actualmente: " + selecUsuario.stock)
            } else {
                console.log("el precio parcial a abonar seria de: " + cantUsuario * selecUsuario.precio * iva);
                total += cantUsuario * selecUsuario.precio * iva
            }

        } else if (opcion = arrProd + 2) {
            console.log("el total a abonar es de: $" + total);
        }
    } while (opcion <= arrProd.length && opcion != arrProd.length + 1);
}
