const calcularMediana = (lista) => {
    const listaOrdenada = lista.sort((a, b) => a - b);
    const mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedio1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);

        mediana = promedio1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}

const esPar = (numero) => {
    if(numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => (
        valorAcumulado = valorAcumulado + nuevoElemento
    ));
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}