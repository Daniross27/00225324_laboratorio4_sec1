function ordenarArray(arr) {
    const nuevoArray = [...arr];
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}
console.log(ordenarArray([53, 54, 37, 12, 76, 31, 34]));
function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(4));
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        if (altura >= alturaDeseada) { return dias }
        altura -= velocidadDecrecimiento;
    }
    return dias;
}
console.log(calcularDiasCrecimiento(3, 2, 30));