function cipher (offset,text){
	let txtcifrado = "";
	let AsciiCesar = 0;
    let formula = 0;
      for (let i= 0; i< text.length; i++){
      AsciiCesar = text.charCodeAt(i);
      formula = String.fromCharCode((AsciiCesar - 65 + offset) % 26 + 65);
      txtcifrado= txtcifrado + formula;
      }
      return txtcifrado;

}
 
   

  
 