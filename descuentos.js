const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const onClickButtonPriceDiscount = () => {
    const price = document.getElementById("inputPrice").value;
    const discount = document.getElementById("inputDiscount").value;

    let precioConDescuento = calcularPrecioConDescuento(price, discount);
    
    let textoResultado = `El precio con ${discount}% de descuento es: $${precioConDescuento}`;
    
    const descuentoConCupon = document.getElementById("nuevoDescuento").value;

    if (descuentoConCupon > 0) {
        const nuevoDescuento = Number(discount) + Number(descuentoConCupon);
        const nuevoPrecio = calcularPrecioConDescuento(price, nuevoDescuento);
        textoResultado = textoResultado + ` y aplicando un cupón con ${descuentoConCupon}% más de descuento: $${nuevoPrecio}`;
    }

    const resultP = document.getElementById("resultPrice");
    resultP.innerHTML = `<strong>${textoResultado}</strong>`;
}

const aplicarCupon = () => {
    const cuponesValidos = {};
    cuponesValidos["CUPON1"] = 10;
    cuponesValidos["CUPON2"] = 15;
    cuponesValidos["CUPON3"] = 20;
    cuponesValidos["CUPON4"] = 25;
    cuponesValidos["CUPON5"] = 30;
    cuponesValidos["CUPON6"] = 35;
    cuponesValidos["CUPON7"] = 40;
    cuponesValidos["CUPON8"] = 45;
    cuponesValidos["CUPON9"] = 50;
    cuponesValidos["CUPON0"] = 55;

    const cupon = document.getElementById("inputCupon").value;
    const descuentoCupon = cuponesValidos[cupon];

    const textoCuponElemento = document.getElementById("textoCupon");

    if(descuentoCupon) {
        textoCuponElemento.innerText = `Cupón con ${descuentoCupon}% más de descuento`;
        const nuevoDescuentoElemento = document.getElementById("nuevoDescuento");
        nuevoDescuentoElemento.value = descuentoCupon;
    } else {
        textoCuponElemento.innerText = `CUPÓN NO VÁLIDO`;
    }
}