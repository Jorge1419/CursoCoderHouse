alert('Bienvenido a la Seccíon de Nuestros Productos');
let insumo = prompt('Ingrese el nombre de un Insumo Informatico');
let carrito = 0;
let subTotal = 0;
let descripcion = '';
let detalle;
let detalles = [];
let compara = 0;

let insumosInformaticos = [
    {nombre: 'monitor', marca: 'benq', precio: 27000},
    {nombre: 'mouse', marca: 'logitech', precio: 2000},
    {nombre: 'teclado', marca:'genius', precio: 3000},
    {nombre: 'disco ssd', marca: 'wd green', precio: 10000 },
    {nombre: 'disco hdd', marca: 'seagate', precio: 6000},
    {nombre: 'cpu', marca: 'noga', precio: 35000},
    {nombre: 'memoria ram', marca:'kingston', precio: 8000},
    {nombre: 'fuente', marca:'Gigabyte', precio: 7000},
    {nombre: 'procesador', marca:'Intel Core i7', precio: 40000},
]

function sumaCarrito(importe) {
    let confirmar = prompt('Desea agregar el Producto al Carrito');
    confirmacion = confirmar.toLowerCase();
    if (confirmacion == 'si') {
        compara = subTotal;
        carrito = carrito + importe;
    } else {
        alert('El insumo no se ha agregado al Carrito');
        compara = subTotal;
        carrito = subTotal;
    }
    return carrito;
}

function detalleProducto(producto, valor) {
    descripcion = descripcion + '<br>  -' + producto + ' $'+ valor;
    return descripcion;
}

function seleccionInsumo() {
    if (subTotal > compara) {
        detalle = detalleProducto(insumo, precioInsumo);
    }
}

const insumoEncontrado = insumosInformaticos.filter((item) => item.nombre == insumo.toLowerCase())
let nombreInsumo = insumoEncontrado[0].nombre;
let precioInsumo = insumoEncontrado[0].precio;
let detInsumo = '';
while (insumo != 'Salir') {  
            nomInsumo = insumo.toLowerCase();
    if (nombreInsumo == nomInsumo) {
            detInsumo = detInsumo + insumo + ' $' + precioInsumo + ", "
            document.getElementById('carInsumo').innerHTML = detInsumo;
            subTotal = sumaCarrito(precioInsumo);
            document.getElementById('subtotalCar').innerHTML = ' $' + subTotal;
            seleccionInsumo(); 
        } 
        
    insumo = prompt('Ingrese el nombre de un Insumo Informatico o Salir para Finalizar');
    if(insumo != 'Salir'){
        const insumoEncontrado = insumosInformaticos.filter((item) => item.nombre == insumo.toLowerCase())
        console.log(insumoEncontrado);
        nombreInsumo = insumoEncontrado[0].nombre;
        precioInsumo = insumoEncontrado[0].precio;
        
    }
}
document.getElementById('totalCar').innerHTML = '→Detalle Insumos Seleccionados:' + detalle + '<br>' + '→Importe Total: ' + '$' + subTotal;

