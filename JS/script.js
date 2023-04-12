// declaracion de variables, const y array de objetos //
const iva = 1.21
let total = 0
const arrProdFijo = [
    { id: 1, nombre: "Ak47", stock: 10, precio: 2500 },
    { id: 2, nombre: "M4A1", stock: 5, precio: 3100 },
    { id: 3, nombre: "Desert Eagle", stock: 22, precio: 700 },
    { id: 4, nombre: "Sniper AWP", stock: 10, precio: 5700 },
    { id: 5, nombre: "Chaleco anti-balas", stock: 50, precio: 1000 },
];
let arrProdFiltrado = [];

// declaracion de constructor y funciones //
class Producto {
    constructor(nombre, stock, precio) {
        this.nombre = nombre;
        this.stock = parseInt(stock);
        this.precio = parseFloat(precio);
    }
}
// filtrado de nombre //
const buscarNombre = (arr, filtro) => {
    const buscar = arr.filter((el) => {
        let minus = el.nombre.toLowerCase();
        return minus.includes(filtro.toLowerCase());
    })
    return buscar
}

// filtrado de precio //
function buscarPrecio(arr, filtro) {
    return arr.filter((el) => {
        return el.precio <= filtro
    })
}

// bienvenido //
function ingresoNombre() {
    let usuario = prompt("ingrese su nombre");
    alert("Bienvenido" + " " + usuario);
}

// verifica edad //
function checkEdad() {
    let edadUsuario = parseInt(prompt("ingrese su edad"));
    if (edadUsuario < 18) {
        alert("Usted no puede comprar un arma: es menor de edad");
        return false;
    } else {
        return true;
    }
}
// funcion principal,  //
function iniciarMenu() {
    let arrProd = [];
    do {
        let mensaje = 'Elegir un producto de la lista para agergar:\n';
        if (arrProdFiltrado.length > 0) {
            arrProd = arrProdFiltrado;
            arrProdFiltrado = [];
        } else {
            arrProd = arrProdFijo;
        }
        for (let i = 0; i < arrProd.length; i++) {
            mensaje += `${i + 1}. ${arrProd[i].nombre}\n`;
        }

        mensaje += "P. Filtrar por precio\n";
        mensaje += "N. Filtrar por nombre\n";
        mensaje += "F. Finalizar Compra\n";
        mensaje += "S. Salir\n";
        opcion = prompt(mensaje);
        if (opcion !== null && !isNaN(opcion) && opcion >= 1 && opcion <= arrProd.length) {
            let selecUsuario = arrProd[opcion - 1];
            alert("ha seleccionado: " + selecUsuario.nombre + " " + "$" + selecUsuario.precio + " " + "// stock: " + selecUsuario.stock);
            let cantUsuario = parseFloat(prompt("cuantas unidades desea llevar?"));
            if (cantUsuario > selecUsuario.stock) {
                alert("tenemos en stock actualmente: " + selecUsuario.stock)
            } else {
                let costo = cantUsuario * selecUsuario.precio * iva;
                alert("el precio por " + cantUsuario + " " + selecUsuario.nombre + " es " + costo + " incluyendo el iva");
                total += cantUsuario * selecUsuario.precio * iva
            }
        } else if (opcion.toUpperCase() == "F") {
            alert("el total a abonar es de: $" + total + " con iva incluido");
        } else if (opcion.toUpperCase() == "P") {
            let precioUsuario = parseFloat(prompt("ingrese un valor menor a: "));
            arrProdFiltrado = buscarPrecio(arrProdFijo, precioUsuario);
        } else if (opcion.toUpperCase() == "N") {
            let nombreIngresado = prompt("ingrese el nombre del arma:");
            arrProdFiltrado = buscarNombre(arrProdFijo, nombreIngresado);
        }
    } while (opcion.toUpperCase() != "S" && opcion.toUpperCase() != "F");
}

//funcion contenedora de todas las previamente declaradas //

function iniciarCarro() {
    ingresoNombre();
    if (checkEdad()) {
        iniciarMenu();
    }
}

// Inicio programa //

iniciarCarro();
