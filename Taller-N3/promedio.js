function calcularMediaAritmetica(lista) {
    // let sumalista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumalista = sumalista + lista[i];
    // };

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista
}