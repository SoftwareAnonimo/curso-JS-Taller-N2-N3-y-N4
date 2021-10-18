function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePecioConDescuento = 100 - descuento;
    const precioConDescuento = "$" + (precio * porcentajePecioConDescuento) / 100;

    return precioConDescuento;
};

function onClickPro() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const DiscountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, DiscountValue)

    const priceP = document.getElementById("PriceP");
    priceP.innerText = "El precio con descuento es de: " + precioConDescuento;
};