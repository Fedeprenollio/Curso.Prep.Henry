// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí



  var array = []
  for ( propiedad in objeto) {
       array.push([propiedad , objeto[propiedad] ])
}
    return array
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí


  var letras = string.split('');
  var contador = {};
  letras.forEach(function(valor){
    if (contador[valor] === undefined) {
      contador[valor] = 1;
    }
    else {contador[valor] +=1}
  })
    return contador;
  }




function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí. LISTO

var array1 = [];
var array2 = [];
var m = s.toUpperCase();

for (var e in s){
  if ( m.includes(s[e])){
    array1.push(s[e]);
  }
  else {
    array2.push(s[e]);
  }
  }
  
var array1 = array1.join('');
var array2 = array2.join('');
var nuevaPalabra = array1.concat(array2);
return nuevaPalabra;


}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí



  var espejo = '';
  for(let i = str.length -1; i >= 0; i--) {
    espejo += str[i];
  };

return espejo.split(' ').reverse().join(' ');
}










function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  
  var numeroAString = numero.toString();   //245 a '245'
  var numeroC = numeroAString.split('').reverse().join(''); 
  if (numeroC == numero){
    return "Es capicua";
  }
    else {
      return "No es capicua"
    }
 
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var nuevaPalabra = '';

  for (var i=0; i<cadena.length ; i++){
    if (!(cadena[i] == 'a' || cadena[i] == 'b' || cadena[i] == 'c' )){
      nuevaPalabra = nuevaPalabra + cadena[i];
    }
  }
  return nuevaPalabra;
  }
  


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí


  var nuevoArray = arr.sort(function (elementoActual, elemtoSiguiente){
    return elementoActual.length - elemtoSiguiente.length ;})
  
    return nuevoArray;

    

  

//for (var i=1;i<arr.length;i++){
  //for (var j=i-1; 0<j<arr.length; j--){
   // if (arr[i].length < arr[j].length){
    //  var aux = arr[j];
     // arr[j]=arr[i];
      //arr[i] = aux;
   // }
  //} return arr;
//}



}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión   = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
  var cadenaVacia= [];
  var elemtosEnComun =[ ''];
  
  let intersectStrings = arreglo1.filter(function(value){
    return arreglo2.includes(value);
  });
  
  if(intersectStrings.length === 0){
    return cadenaVacia ;
  }else{
    return elemtosEnComun = intersectStrings //.join(",")  // '1,3'
    
    
  }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

