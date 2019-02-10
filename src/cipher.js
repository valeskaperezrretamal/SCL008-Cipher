  // la función cipher aplica el cifrado cesar a las letras mayusculas, minusculas y numeros. Devuelve una cadena de texto cifrada en donde los elementos no cifrados no son modificados
  //string Soporta todo tipo de cadena de texto.
  //offset, soporta valores positivos y negativos, corrimiento a la derecha e izquierda respectivamente.
  //para decifrar basta con invertir el signo del offset
  function cipher(offset,string){
  let txtcifrado = "";
  let caracterAscii;
  let formula;
  let aux;
  let tipoDeCaracter;
  /*la función for recorre la cadena de texto*/
  for (let i= 0; i< string.length; i++){
    caracterAscii = string.charCodeAt(i); /* variable que guarda el carcater transformado en ascii*/
    
    /*se revisa que tipo de caracter que se va a codificar, puede ser mayuscula, minuscula, numero, espacio u otros*/
    tipoDeCaracter = "otro"; 
    if (caracterAscii >= 65 && caracterAscii <= 90) { tipoDeCaracter = "mayuscula";}
    if (caracterAscii >= 97 && caracterAscii <= 122) { tipoDeCaracter = "minuscula";}
    if (caracterAscii >= 48 && caracterAscii <= 57) { tipoDeCaracter = "numero";}
    
    
    
    /*para mayusculas se usará esta formula*/
    if (tipoDeCaracter === "mayuscula") {
      /*la implementacion del operador residuo provoca problemas en la formula original 
      cuando el dividendo es negativo, por este motivo al resultado del primer residuo le sumamos 26 
      y volvemos a sacar el modulo 26, manteniendo la igualdad matematica de la expresion pero obteniendo el
      numero positivo entre 0 y 25 para poder sumarse al 65 y obtener el codigo ascii correspondiente.
      matematicamente se usa que x+n=x  (mod n) para todo x,n en Z*/
      aux=(caracterAscii - 65 + offset) % 26;
      formula = String.fromCharCode((aux+26) % 26 + 65);
      txtcifrado= txtcifrado + formula;
    }
    /*para minusculas se usará esta formula*/
    if (tipoDeCaracter === "minuscula") {
      aux=(caracterAscii - 97 + offset) % 26;
      formula = String.fromCharCode((aux+26) % 26 + 97);
      txtcifrado= txtcifrado + formula;
    }
    /*para numeros su usará esta formula*/
    if (tipoDeCaracter === "numero") {
      aux=(caracterAscii - 48 + offset) % 10;
      formula = String.fromCharCode((aux+10) % 10 + 48);
      txtcifrado= txtcifrado + formula; 
    }
    /*para otros se usará esta formula*/
    if (tipoDeCaracter === "otro") {
      txtcifrado = txtcifrado + string[i];
    }



  }
  return txtcifrado;
}