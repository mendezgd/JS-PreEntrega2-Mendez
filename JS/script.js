const carrito = [];
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

const arrProd = [
    { id: 1, nombre: "Ak47", stock: 10, precio: 2500 },
    { id: 2, nombre: "M4A1", stock: 5, precio: 3100 },
    { id: 3, nombre: "Desert Eagle", stock: 22, precio: 700 },
    { id: 4, nombre: "Sniper AWP", stock: 10, precio: 5700 },
    { id: 5, nombre: "Chaleco anti-balas", stock: 50, precio: 1000 },
];

function agregarCarro(id) {
    const item = arrProd.find((p) => p.id === id);
    carrito.push(item);
}

const buscarNombre = (arr, filtro) => {
    const buscar = arr.find((el) => {
        return el.nombre.includes(filtro);
    })
    return buscar
}

function buscarPrecio(arr, filtro) {
    return arr.filter((el) => {
        return el.precio <= filtro
    })
}
/* let usuario = prompt("ingrese su nombre");
alert("Bienvenido" + " " + usuario); */
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
        mensaje += `${arrProd.length + 3}. Filtrar por precio\n`;
        mensaje += `${arrProd.length + 4}. Filtrar por nombre\n`;
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

        } else if (opcion == arrProd.length + 2) {
            console.log("el total a abonar es de: $" + total);
        } else if (opcion == arrProd.length + 3) {
            let precioUsuario = parseFloat(prompt("ingrese un valor menor a: "));
            const precioIngresado = buscarPrecio(arrProd, precioUsuario);
            console.table(precioIngresado);
            alert("F5 para volver a ingresar");
        } else if (opcion == arrProd.length + 4) {
            let nombreIngresado = prompt("ingrese el nombre del arma:");
            const nombreEncontrado = buscarNombre(arrProd, nombreIngresado);
            console.log(nombreEncontrado);
        }
    } while (opcion <= arrProd.length && opcion != arrProd.length + 1);
}

/* let nombreIngresado = prompt("ingresa un producto");
const nombreEncontrado = buscarNombre(arrProd, nombreIngresado); */
/* console.log(nombreEncontrado); */

/*funcion de filtrado por precio*/

/* precioIngresado = parseFloat(prompt("menor a: "));
const precioEncontrado = buscarPrecio(arrProd, precioIngresado);

console.table(precioEncontrado); */