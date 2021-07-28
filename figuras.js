// ***** Logica con JavaScript *****
// Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

// Triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

//Circulo
const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);

    return diametro * Math.PI;
}
const areaCirculo = (radio) => radio * radio * Math.PI;


// *****Interaccion con HTML*****
// Cuadrado
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}
const calcularAreaCuadrado = () => {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}

// Triangulo
const calcularPerimetroTriangulo = () => {
    const lado1 = document.getElementById("lado1Triangulo").value;
    const lado2 = document.getElementById("lado2Triangulo").value;
    const base = document.getElementById("baseTriangulo").value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    alert(perimetro);
}
const calcularAreaTriangulo = () => {
    const base = document.getElementById("baseTriangulo").value;
    const altura = document.getElementById("alturaTriangulo").value;

    const area = areaTriangulo(base, altura);

    alert(area);
}
const calcularAlturaIsosceles = () => {
    const lado1 = document.getElementById("lado1Triangulo").value;
    const lado2 = document.getElementById("lado2Triangulo").value;
    const base = document.getElementById("baseTriangulo").value;

    const ladosAB = verificarTrianguloIsosceles(lado1, lado2, base);

    if (ladosAB.esIsosceles) {
        alert("El triángulo SÍ es Isósceles");
        const alturaIsosceles = alturaTrianguloIsosceles(ladosAB.a, ladosAB.b);
        alert("La Altura del Triángulo Isósceles es: " + alturaIsosceles);
    }
    else {
        alert("El triángulo NO es Isósceles");
    }
}

const verificarTrianguloIsosceles = (lado1, lado2, lado3) => {
    let ladosAB = {
        esIsosceles: false
    };

    if (lado1 === lado2) {
        ladosAB = {
            esIsosceles: true,
            a: lado1,
            b: lado3
        }
    }
    else if (lado1 === lado3) {
        ladosAB = {
            esIsosceles: true,
            a: lado1,
            b: lado2
        }
    }
    else if (lado2 === lado3) {
        ladosAB = {
            esIsosceles: true,
            a: lado2,
            b: lado1
        }
    }

    return ladosAB;
}

const alturaTrianguloIsosceles = (a, b) => {
    const h = Math.sqrt( Math.pow(a, 2) - ( Math.pow(b, 2) / 4 ) );

    return h;
}

// Circulo
const calcularDiametroCirculo = () => {
    const radio = document.getElementById("radioCirculo").value;
    const diametro = diametroCirculo(radio);

    alert(diametro);
}
const calcularPerimetroCirculo = () => {
    const radio = document.getElementById("radioCirculo").value;
    const perimetro = perimetroCirculo(radio);

    alert(perimetro);
}
const calcularAreaCirculo = () => {
    const radio = document.getElementById("radioCirculo").value;
    const area = areaCirculo(radio);

    alert(area);
}