
var urlBase = 'http://192.168.2.50:8081/mapainteractivo/';

window.onload = function LoaderM() {
    //alert("sjkdfjs");
    console.log(ValidarUsuarioLogueado());
    if (!ValidarUsuarioLogueado()) {
        window.location = `${urlBase}`;
    }
}

function ValidarUsuarioLogueado() {
    var usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioLocal != null) {
        return true;
    }
    else
        return false;

}

async function GetServidorAsync(url, token = '') {
    var request = new Request(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    let response = await fetch(request);
    //console.log(response);
    if (response.status == 200) return response.json();
    else return null;
    //console.log(response.status);
}

async function POSTServidor(url, data, token) {
    var request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    let res = await fetch(request);
    if (res.ok) {
        return res;
    } else {
        return res;
    }
}
