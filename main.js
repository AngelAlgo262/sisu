/* 
SISU Technologies - Reto Hash
Instrucciones
● Haz este reto individualmente y sin ninguna ayuda externa.
● No utilices sitios como codepen o jsfiddle, se quedan guardadas las respuestas y otros
candidatos podrían encontrarlas en internet. Nos ayudas mucho para no tener que cambiar el
reto constantemente y evitar a quienes quieren hacer trampa.
● Este reto busca evaluar tus habilidades de análisis y no necesitas ningún tipo de conocimiento o
experiencia previa con funciones hash.
Tenemos una función hash, que como entrada recibe un string x. La función devuelve un número entero: 
*/

function cambiarOrden() {
  let cadena = "a,b,e,h,i,m,o,p,r,s,t,u,v"; //cadena separada por comas (diccionario)
  let arr1 = cadena.split(",", 10); // la cadena se convierte en array olo de 10 caracteres
  //Se ordena el arreglo de forma aleatoria
  let strale = arr1.sort(function () {
    return Math.random() - 0.5;
  });
  return strale; // se retorna la cadena aleatoria.
  
};

let arr2 = cambiarOrden()

let x = arr2;

console.log(x);

console.log("El largo de la cadena X es " + x.length);

function hash(x) {
  var seed = 41;
  diccionario = "abehimoprstuv";
  for (i = 0; i < x.length; i++) {
    seed = seed * 17 + diccionario.indexOf(x[i]);
  }
  return seed;
}

console.log("Los caracteres de la cadena son " + x);
console.log("El valor de la función es " + hash(x));

if (hash(x) == 83503320370387) {
  document.write("La palabra secreta es " + x + ":)");
} else {
  document.write("No sé cual sea la palabra secreta :(");
}

/* 
El reto es encontrar el string x que, al aplicarle la función hash, produciría como resultado el siguiente
número entero: 83503320370387.
El string x es una palabra de 10 letras que se compone únicamente de los siguientes caracteres:
abehimoprstuv (con capacidad de repetir u omitir uno o varios de ellos).
Al finalizar
Cuando resuelvas el problema, entra a https://careers.sisu.mx/ donde podrás conocer más sobre
nosotros y encontrarás los detalles de la vacante. Al aplicar a través de nuestro sitio, te pediremos que
nos compartas el string x que encontraste.
Asimismo solicitaremos que incluyas un link a un documento breve que explique claramente cómo lo
resolviste, cuál fue tu proceso y también el tiempo que te tomó encontrar la solución al reto.
Te agradecemos de antemano el tiempo y esfuerzo en resolver este problema, esperamos que lo
encuentres divertido e interesante.
Éxito!
*/
