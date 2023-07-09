// Prompt y Alert
/* Traductor */
alert("Cómo saludar en Inglés")

let palabra1 = prompt("Ingrese 'hola'")
if (palabra1 == "hola"){
    alert(palabra1 + " " + "se escribe 'Hello'")
}else{
    alert("Error; siguiente palabra")
}

let palabra2 = prompt("Ingrese 'chau'")
if (palabra2 == "chau"){
    alert(palabra2 + " " + "se escribe 'Bye'")
}else{
    alert("Error; siguiente ejemplo")
}


/* Calculadora */
alert("Calculadora básica: suma")
let numero1 = parseInt(prompt("Ingrese el primer número"))
let suma = prompt("Ingrese '+' para la suma")
let numero2 = parseInt(prompt("Ingrese el segundo número"))

if (suma == "+"){
    let resultado = (numero1+numero2)
    alert("El resultado de la suma es " + resultado)
}else{
    if (operacion != "+"){
    alert("No ingresó el simbolo correcto")
    }
}

alert("Calculadora básica: resta")
let numero3 = parseInt(prompt("Ingrese el primer número"))
let resta = prompt("Ingrese '-' para la resta")
let numero4 = parseInt(prompt("Ingrese el segundo número"))

if (resta == "-"){
    let resultado = (numero3-numero4)
    alert("El resultado de la resta es " + resultado)
}else{
    if (operacion != "-"){
    alert("No ingresó el simbolo correcto")
    }
}

