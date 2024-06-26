//Reciben dos parámetros: una lista de palabras words y una palabra word.
//Primero, busca el índice de la palabra en la lista.
//Después, usa ese índice (que será un número) y devolve todas las palabras de words que sean más largas (length) que el número del índice.
//Tene en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.

const words = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];

const word = "pepito";

function buscaPalabras(words, word) {
  const indice = words.indexOf(word);
  const palabrasMasLargas = words.filter((word) => {
    return word.length > indice;
  });

  return palabrasMasLargas;
}

console.log(buscaPalabras(words, word));
