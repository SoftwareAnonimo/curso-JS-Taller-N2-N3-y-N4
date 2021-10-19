const lista1 = [
    1, 2, 3, 4, 5, 2, 4, 6, 2, 1, 2, 1,
];

const lista1Cound = {};

lista1.map(
    function(elemento) {
        if(lista1Cound[elemento]) {
                lista1Cound[elemento] += 1;
        }else{
            lista1Cound[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Cound).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];