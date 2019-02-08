/*------------------------------------------------------------------------
-----------------------------definición de variables--------------------
--------------------------------------------------------------------------*/


const botoncodificar = document.getElementById ("botoncodificar");

const botondecodificar = document.getElementById ("botondecodificar");



/*-------------------------definición de eventos----------------------------*/
botoncodificar.addEventListener("click", () => {
/*codigo para guardar en una variable, el contenido de caja texto original*/
const textoOriginal = document.getElementById("cajaTextoOriginal").value

/*codificar el texto usando cipher y guardarlo en una nueva varieble*/

const textoCodificado = cipher(2,textoOriginal);

/*escribir el texto codificado en la caja texto  codificado*/
document.getElementById("cajaTextoCodificado").value = textoCodificado;
})

botondecodificar.addEventListener("click", () => {
    /*agregar codigo para guardar en una variable, el contenido de caja texto caja codificado*/
    
    
    /*decodificar el texto usando cipher decode*/
    
    /*escribir el texto decodificado en la caja texto original*/
    })