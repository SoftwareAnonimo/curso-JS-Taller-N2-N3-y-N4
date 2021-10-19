function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista
}