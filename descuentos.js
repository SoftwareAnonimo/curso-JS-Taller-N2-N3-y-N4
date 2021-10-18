// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePecioConDescuento = 100 - descuento;
    const precioConDescuento = "$" + (precio * porcentajePecioConDescuento) / 100;

    return precioConDescuento;
};


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePecioConDescuento,
//     precioConDescuento,
// });