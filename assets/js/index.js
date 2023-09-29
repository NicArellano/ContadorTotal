
//variables declaradas

const precio = 699990 ;
let cantidad = 0 ;
let total = 0;


//Definir variables-HTML


let cantidadHTML = document.querySelector("#cantidad")
let totalHTML = document.querySelector("#total")
let sumarButton = documen.querySelector("#sumar")
let restarButton = document.querySelector("#restar")

// definir funcion

function sumar() {
    cantidad = cantidad + 1;
    cantidadHTML.innerHTML = "Cantidad: " + cantidad;

    total = cantidad * precio 
    totalHTML.innerHTML = "Total a pagar: " +  total;
}

function restar() { 
    if (cantidad > 0 ) {
        cantidad = cantidad - 1
        cantidadHTML.innerHTML = "Cantidad: " + cantidad;

        total = cantidad * precio
        totalHTML.innerHTML = "Total a pagar: " + total;
        
    }

}

// Evento 
sumarButton.addEventListener("click", sumar)
restarButton.addEventListener("click", restar)

