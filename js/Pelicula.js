class Pelicula {
  static listaGeneros = [
    "Acción",
    "Adultos",
    "Animación",
    "Autobiografía",
    "Aventura",

    "Ciencia ficción",
    "Cine negro",
    "Comedia",
    "Concursos de televisión",
    "Crimen",

    "Deportes",
    "Documental",
    "Drama",
    "Familiar",
    "Fantasía",

    "Guerra",
    "Historia",
    "Musicales",
    "Misterio",
    "Noticias",

    "Películas de vaqueros",
    "Programa de entrevistas",
    "Reality shows",

    "Romance",
    "Suspenso",
    "Terror",
  ];

  static generosAceptados() {
    console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`,
    );
  }

  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  // Validación de cadenas con longitud máxima

  validarCadena(propiedad, valor) {
    if (!valor) {
      console.warn(`${propiedad} "${valor}" está vacío`);

      return false;
    }

    if (typeof valor !== "string") {
      console.error(
        `${propiedad} "${valor}" ingresado no es una cadena de texto`,
      );

      return false;
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB ID", id)) {
      const regex = /^([a-z]{2})([0-9]{7})$/;

      if (!regex.test(id)) {
        console.error(
          `IMDB ID "${id}" no es valido, debe tener nueve caracteres: los dos primeros letras minusculas y los siete restantes numeros.`,
        );
      }
    }

    return true;
  }
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud) {
      console.error(
        `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`,
      );

      return false;
    }

    return true;
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo)) {
      if (this.validarLongitudCadena("Título", titulo, 100)) {
        // <-- Con C mayúscula
        return true;
      }
    }
    console.error(`Título "${titulo}" no es válido`);
    return false;
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      if (this.validarLongitudCadena("Director", director, 50)) {
        // <-- Con C mayúscula
        return true;
      }
    }
    console.error(`Director "${director}" no es válido`);
    return false;
  }

  validarNumero(propiedad, valor) {
    if (!valor) {
      console.warn(`${propiedad} "${valor}" esta vacio`);
      return false;
    }
    //!== es un operador de comparacion que compara si dos valores son diferentes y de diferente tipo. En este caso, se esta comparando si el tipo de dato de valor es diferente a "number". Si es asi, se ejecuta el bloque de codigo dentro del if.
    if (typeof valor !== "number") {
      console.error(`${propiedad} "${valor}" no es un numero`);
      return false;
    }
    return true;
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno)) {
      if (!/^\d{4}$/.test(estreno)) {
        console.error(
          `Año de estreno "${estreno}" no es valido, debe ser numero de 4 digitos.`,
        );
        return false;
      }
    }
    return true;
  }
  validarArreglo(propiedad, valor) {
    if (!valor) {
      console.warn(`${propiedad} "${valor}" esta vacio`);
      return false;
    }
    if (!Array.isArray(valor)) {
      console.error(`${propiedad} "${valor}" no es un arreglo`);
      return false;
    }
    if (valor.length === 0) {
      console.error(`${propiedad} "${valor}" no tiene elementos`);
      return false;
    }
    for (let elemento of valor) {
      if (typeof elemento !== "string") {
        console.error(` ${propiedad}contienen un elemento no valido: "${elemento}" 
                no es una cadena de texto`);
        return false;
      }
    }
  }
  validarPais(pais) {
    return this.validarArreglo("Pais", pais);
  }
  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(
            `Genero "${genero}" no es aceptado.
         Genero recibidos: ${genero.join}(",")}`,
          );
          Pelicula.generosAceptados();
          return false;
        }
      }
    }
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion)) {
      if (calificacion < 0 || calificacion > 10) {
        console.error(
          `Calificacion "${calificacion}" debe de ser un rango del 0 al 10. `,
        );
      } else {
        this.calificacion = parseFloat(calificacion.toFixed(1));
      }
    }
  }
  fichaTecnica() {
    console.info(
      ` Ficha Técnica:

            ID: ${this.id}

            Título: ${this.titulo}

            Director: ${this.director}

            Año de estreno: ${this.estreno}

            País(es): ${this.pais.join(", ")}

            Género(s): ${this.generos.join(", ")}

            Calificación: ${this.calificacion}`,
    );
  }
}

const peli = new Pelicula({
  id: "tt1234567",
  titulo: "Nombre de la pelicula",
  director: "Nombre del director",
  estreno: 2020,
  pais: ["México"],
  generos: ["Drama"],
  calificacion: 8.5,
});
peli.fichaTecnica();
