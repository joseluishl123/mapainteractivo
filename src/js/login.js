window.onload = function Loader() {
    if (ValidarUsuarioLogueado()) {
        window.location = `${urlBase}mapa`;
    }
}

async function Login() {
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    let data = {
        usuario: usuario,
        password: password
    };

    if (usuario == null || usuario == '') {
        alert('Ingrese un usuario');
        return;
    }

    if (password == null || password == '') {
        alert('Ingrese una contraseña');
        return;
    }

    let url = `${urlBase}db/datos/login.php?usuario=${usuario}&password=${password}`;
    let respuesta = await GetServidorAsync(url, data, '');
    if (respuesta.datos.length > 0) {

        respuesta.datos[0].password = "";
        localStorage.setItem('usuario', JSON.stringify(respuesta.datos[0]));
        window.location = urlBase;
        //var usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    }
    console.log(respuesta);
    //await CargarUbucaciones();
    //initMap();
    //alert('La ubicación de ha guardado');
}
