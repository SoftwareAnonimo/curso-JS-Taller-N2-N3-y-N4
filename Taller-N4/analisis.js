const salariosPer = peru.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosPerSorted = salariosPer.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB
    }
);

function esPar(numero) {
    return (numero % 2 == 0);
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

console.log(
    medianaSalarios(salariosPerSorted)
);