const calcularModa = (lista) => {
    const listaCount = {};

    lista.map((elemento) => {
        if(listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });

    const listaArray = Object.entries(listaCount).sort((a, b) => b[1] - a[1]);
    const moda = listaArray[0];

    return moda;
}