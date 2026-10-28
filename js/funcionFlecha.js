//funcion flecha. es simplemente una forma más corta y moderna de escribir funciones en JavaScript, introducida en ES6 (2015). Se llama así porque utiliza el símbolo => (un igual y un mayor que), que parece una flecha.

const quitarDuplicados = (arr = undefined) => {
  //Va la logica de la función
  //1.validar que se reciba el parametro
  if (arr === undefined) return console.warn("No ingresaste un arreglo");
  //2.valida que arr sea un arreglo
  // instanceof. utiliza para verificar si un objeto es una instancia de una clase o función constructora específica
  if (!(arr instanceof Array))
    return console.error("El parámetro ingresado no es un arreglo");
  //3. validar que el arreglo no esté vacío
  //length. propiedad que devuelve el número de elementos en un arreglo tambiein se le puede decir que es tamaño del arreglo
  if (arr.length === 0) return console.error("El arreglo está vacío");

  //4.validar que tenga al menos dos elementos
  if (arr.length === 1)
    return console.warn("El arreglo debe tener al menos dos elementos");
  //si es un objeto dentro de los parentesis se utilizan llaves para indicar que es un objeto, y dentro de las llaves se pueden colocar propiedades y valores.
  // En este caso, se está utilizando console.info para mostrar información en la consola del navegador o del entorno de desarrollo.
  //.filter . es un método de los arreglos en JavaScript que crea un nuevo arreglo con todos los elementos que cumplan una condición .
  //  En este caso, se está utilizando para eliminar los elementos duplicados del arreglo original.
  //valor es el elemento actual. indice la posicion actual. self es el arreglo completo.
  //self.indexOf(valor) === indice. es una condición que verifica si el índice del primer elemento encontrado en el arreglo es igual al índice actual. Si es así, significa que el elemento no es un duplicado y se incluye en el nuevo arreglo.
  console.info({
    original: arr,
    sinDuplicados: arr.filter(
      (valor, indice, self) => self.indexOf(valor) === indice
    ),
  });
  // true y false. son valores booleanos que representan verdadero y falso respectivamente. En este caso, se están utilizando para indicar si el arreglo original tiene duplicados o no.
  //string .  es un tipo de dato que representa texto. En este caso, se está utilizando para mostrar un mensaje en la consola indicando si el arreglo original tiene duplicados o no. y se ponene entre comillas.
  //el arreglo se pone entre corchetes []
  //Set es una estructura de JS que permite valores unicos, no permite duplicados y mantiene el orden de inserccion

  console.info({
    original: arr,
    sinDuplicados: [...new Set(arr)],
  });
};
quitarDuplicados(); // undefined
quitarDuplicados({}); // objeo
quitarDuplicados([]); // arrelgo vacio
quitarDuplicados(["10"]); //arreglo con un solo elemento
quitarDuplicados(["10", "x", "x", "2", "10", 10, , true, false]);
