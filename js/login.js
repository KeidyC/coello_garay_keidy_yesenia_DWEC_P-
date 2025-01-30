let usersJSONPath = '../data/users.json';

function cargarJSONEnLocalStorage() {
    fetch(usersJSONPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar el archivo JSON desde ${usersJSONPath}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            localStorage.setItem("usuarios", JSON.stringify(data)); // Guardar en Local Storage
            console.log("Usuarios cargados y almacenados en Local Storage:", data);
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}

// Función que valida el usuario y la contraseña
function validarCredenciales() {
    let usuario = document.getElementById('username').value
    let pass = document.getElementById('password').value;

     let datos = cargarJSONEnLocalStorage();
     let i;
     for(i = 0; i < datos.length; i ++){
        if(datos[usuario].username == usuario){
            console.log("usuario Valido")
            if(datos[i][0].password == pass){
                console.log("Pass Correcto")
                window.location.href = "html/juego.html"
            }else{
                let error = document.getElementById('error-message');
                let parrafo = document.createElement('p');
                parrafo.textContent = "Usuario o contraseña incorrecta"
                parrafo.style.background = "red";
                error.appendChild(parrafo)
            }
            return true;
        }
     }

}


document.getElementById('login-button').addEventListener("click", function() {
    validarCredenciales(usuario, pass);
});




