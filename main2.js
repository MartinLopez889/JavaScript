
// console.log
/* Simulador interactivo */
/* calcular interes en 3 o 6 cuotas */

let precioBase = parseInt(prompt("Ingrese el precio base del producto"))
let cuotas = parseInt(prompt("Ingrese si quiere hacerlo en 3 o 6 cuotas"))
const interes3 = 10
const interes6 = 30

if (cuotas === 3){
    const precioFinal = ((precioBase * interes3) / 100) + precioBase
    console.log(precioFinal)
}else{
    if (cuotas === 6){
    const precioFinal = ((precioBase * interes6) / 100) + precioBase
    console.log(precioFinal)
    }
}
console.log("Fin del simulador interactivo")


/* Funcion flecha */
alert("¿Cuál sería tu nombre de SuperHeroe?")

const nombre1 = prompt("Ingrese calle en la que vivió en su infancia")
const nombre2 = prompt("Ingrese lo último que comió")

const nombre = (nombre1, nombre2) => {return nombre1 + nombre2}
console.log(nombre(nombre1, nombre2))

console.log("Fin de la 'Función Flecha'")


// Ciclos
alert("Ingrese a las Herramientas de Desarrolladores para ver en qué años se jugó la Copa del Mundo de Fútbol Masculino")

for(let i = 1930; i <= 2022; (i += 4)){
    if(i ===1942 || i===1946){
        continue
    }
    console.log("El Mundial de fútbol se jugó el año " + i)    
}

console.log("Los Mundiales de 1942 y 1946, no se jugaron debido a la Segunda Guerra Mundial")
console.log("El próximo Mundial, se jugará el 2026")

console.log("Fin de los Ciclos")