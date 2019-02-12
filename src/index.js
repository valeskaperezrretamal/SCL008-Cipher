/*------------------------------------------------------------------------
-----------------------------definición de variables--------------------
--------------------------------------------------------------------------*/


const botoncodificar = document.getElementById ("botoncodificar");

const botondecodificar = document.getElementById ("botondecodificar");

const botonborrar = document.getElementById ("botonborrar")



/*-------------------------definición de eventos----------------------------*/
botoncodificar.addEventListener("click", () => {
    /*codigo para guardar en una variable, el contenido de caja texto original*/
    const textoOriginal = document.getElementById("cajaTextoOriginal").value;

    /*guarda en una variable el valor del numero (offset) de la caja chica*/
    const numeroOffset = document.getElementById("cajaTextoNumero").value;
    /*codificar el texto usando cipher y guardarlo en una nueva varieble parseInt convierte el numero
    en formato string a tipo number*/

    const textoCodificado = window.cipher.encode(parseInt(numeroOffset,10),textoOriginal);

    /*escribir el texto codificado en la caja texto  codificado*/
    document.getElementById("cajaTextoCodificado").value = textoCodificado;
})

botondecodificar.addEventListener("click", () => {
    /*agregar codigo para guardar en una variable el contenido de caja texto codificado*/
    const textoCodificado = document.getElementById("cajaTextoCodificado").value;
   
    /*guardar en una variable el valor del numero (offset) de la caja chica*/
    const numeroOffset = document.getElementById("cajaTextoNumero").value;

    /*decodificar el texto usando cipher decode*/
    const textoDecodificado = window.cipher.decode(parseInt(numeroOffset,10),textoCodificado);
    
    /*escribir el texto decodificado en la caja texto original*/
    document.getElementById("cajaTextoOriginal").value = textoDecodificado;


 })
 botonborrar.addEventListener("click", () => {
     /* con boton borrar todo que se borre lo que esta en cajaTextoCodificada*/
    document.getElementById("cajaTextoCodificado").value = ""
    /*con boton borrar todo que se borre lo que esta en cajaTextoOriginal*/
    document.getElementById("cajaTextoOriginal").value = ""
 })
