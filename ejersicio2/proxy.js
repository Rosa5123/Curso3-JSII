//proxi objeto que permite interceptar y redefinir operaciones fundamentales de un objeto, como la lectura de propiedades, asignación de valores, enumeración de propiedades, invocación de funciones, etc. En este caso, se utiliza para crear un proxy que intercepta el acceso a las propiedades del objeto y devuelve un mensaje personalizado si la propiedad no existe.
//const proxy = new Proxy (objetivo, manejadfor)
/*const persona = {
    nombre : "",
    apellido : "",
    edad : 0
};
const manejador = {
    set(obj, prop, valor) {
        //validar que la propiedad sea permitida
        const propiedadesPermitidas = ["nombre", "apellido", "edad"];
        if (propiedadesPermitidas.includes(prop)) {
           //asignar el valor a la propiedad del objeto
            obj[prop] = valor;
           
        } else {
            //mostrar advertencia si la propiedad no está permitida
            console.error(`La propiedad ${prop} no está permitida en el objeto persona.`);
        }
        //retornar true para indicar que la operación de asignación fue exitosa
        return true;
    }
};
const Juan = new Proxy(persona, manejador);
//asignar valores 
Juan.nombre = "Juan";
Juan.apellido = "Pérez";
Juan.edad = 35;
Juan.insta = "juan_smith"; //esto no se permite y mostrará un error

console.info(Juan);*/
//proxi objeto que permite interceptar y redefinir operaciones fundamentales de un objeto, como la lectura de propiedades, asignación de valores, enumeración de propiedades, invocación de funciones, etc. En este caso, se utiliza para crear un proxy que intercepta el acceso a las propiedades del objeto y devuelve un mensaje personalizado si la propiedad no existe.
// ------------------------------

// Manejador usando includes()

// ------------------------------

// Este manejador valida que solo se puedan asignar propiedades permitidas.

// Si alguien intenta agregar una propiedad que no existe, se mostrará un error.
const manejadorExpresionesRegulares = {

  set(obj, prop, valor) {

    const propiedadesValidas = ["nombre", "apellido", "edad"];

 

    // Validar que la propiedad exista en el objeto

    if (propiedadesValidas.indexOf(prop) === -1) {

      console.error(` La propiedad "${prop}" no existe en el objeto persona.`);

      return;

    }

 

    // Validación para nombre y apellido: solo letras y espacios.

    // La expresión regular revisa que NO haya números ni símbolos.

    if ((prop === "nombre" || prop === "apellido") &&

        !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)) {

      console.error(` El valor de "${prop}" no es válido. Solo se permiten letras y espacios.`);

      return;

    }

 

    // Si todo es válido, se asigna el valor.

    obj[prop] = valor;

  }

};










