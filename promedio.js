const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => (
        valorAcumulado = valorAcumulado + nuevoElemento
    ));
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}