alert("Calculadora de impuestos")

function calcularImp(precio){
    const iva = 1.21
    const impPais = 1.30
    return precio * iva *  impPais
}
let ingresado = parseInt(prompt("ingresa el precio al que quiere calcular el IVA"))
let resultado = calcularImp(ingresado)
console.log(resultado)