function Cargadocumento() {
    var xhttp = new XMLHttpRequest()  ;
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText ;
        }
    };
    xhttp.open ( "get", archivo.txt ,  true);
    xhttp.send();
    
}

function Cargadocumento (){
    fetch(' archivo.txt  ')
    .then(res=> {
        if (!res.ok) throw new Error ('Archivo no disponible');
        return res.text() ;
    })
    .then(data => {
        document.getElementById("demo").innerHTML = data ;
    })
    .catch ( err=>{
        document.getElementById("demo").innerHTML = "Error al cargar el contenido.";
    });
}