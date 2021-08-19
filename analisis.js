// Funciones Helpers/Utils
const esPar = (numero) => (numero % 2) === 0;

const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => (
        valorAcumulado = valorAcumulado + nuevoElemento
    ));    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Calculadora de Mediana
const medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    } else {
        const personaMitad = lista[mitad];
        
        return personaMitad;
    }
}

// Mediana General
const salariosCol = colombia.map(persona => persona.salary);
const salariosColSorted = salariosCol.sort((a,b) => a - b);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del TOP 10%
const spliceStart = (salariosColSorted.length * (90) / 100);
const spliceCount = (salariosColSorted.length - spliceStart);
const salariosColTop10 =  salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});