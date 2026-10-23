const formEl = document.querySelector('.form'); 

formEl.addEventListener('submit', event => { 
event.preventDefault();  //este es para que no se recargue la pagina al enviar el formulario

const formData = new FormData(formEl); //esto es para obtener los datos del formulario
const data = Object.fromEntries(formData.entries()); //esto es para convertir los datos del formulario en un objeto //estries es un metodo que devuelve un array de arrays con los datos del formulario
});
//API un puente o mensajero que permite que dos programas diferentes hablen entre sí y compartan información.
//JSON es solo un formato de texto plano para organizar y enviar información de un lugar a otro.
//GET OBTENER DATOS 
//POST CREAR RECURSOS 
//PUT REEMPLAZAR RECURSOS
//PATCH ACTUALIZAR RECURSOS PARCIALMENTE 
//DELETE ELIMINAR RECURSOS
//FETCH es la herramienta o función que usas para ir a buscar datos o un metodo a un servidor o una API a través de internet.


fetch('https://jsonplaceholder.typicode.com/posts/1', {  //esto es para enviar los datos del formulario a la API


    method: 'PUT',

    headers: {

        'Content-Type': 'application/json; charset=UTF-8'

    },

    body: JSON.stringify(data) 

})

    .then(response => response.json()) //esto es para convertir la respuesta en json 

    .then(data =>  //esto es para manejar la respuesta de la API
        console.log('Respuesta de la API:', data))  //esto es para mostrar la respuesta en la consola

    .catch(error => console.error('Error:', error)); //esto es para manejar los errores de la API