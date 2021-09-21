const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
let precioDescuento = 200;
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);


class producto {
    constructor(nombre, color, cantidad, tela){
    this.nombre = nombre;
    this.color = color;
    this.cantidad = cantidad;
    this.tela = tela;
}
}

const nombre = prompt ("Ingrese el nombre del producto");
const color = prompt ("Seleccione el color");
const cantidad =  Number(prompt("¿Qué cantidad desea?"));
const tela = prompt ("¿Qué tipo de tela?")


alert ("El precio del producto con descuento es de $" + nuevoPrecio*cantidad + " (IVA incluido)");
let finalizarCompra = prompt ("desea confirmar la compra?");


if ((finalizarCompra == "si") || (finalizarCompra == "SI")) {
    alert ("felicitaciones! su compra ha sido confirmada")
    }
else {
    alert ("Su compra ha sido cancelada")
}