urlBase = "http://localhost:8081/mapainteractivo/";
CargarUbucaciones();
async function GetServidorAsync(url, token = "") {
    var request = new Request(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    let response = await fetch(request);
    //console.log(response);
    if (response.status == 200)
        return response.json();
    else
        return null;
    //console.log(response.status);
}


async function POSTServidor(url, data, token) {
    var request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        },
    });

    let res = await fetch(request);
    //console.log(res);
    if (res.ok) {
        //console.log(res.statusText);
        return res.ok;
    } else {
        //console.log(res);
        return res.ok;
    }
}


async function GuardarUbicacion() {
    document.getElementById("").value;
    document.getElementById("").value;
    document.getElementById("").value;
    document.getElementById("").value;
    document.getElementById("").value;
    document.getElementById("").value;

    let data = {
        "nombre": "",
        "latitud": "",
        "longitud": "",
        "descripcion": "",
        "imagen": "",
    };
    let url = `${urlBase}bjhsdfshdf`
    let respuesta = await POSTServidor(url, data, "");
    console.log(respuesta);
}

async function CargarUbucaciones() {
    let datos = await GetServidorAsync(`${urlBase}db/datos/lista.php`);
    console.log(datos);
    if (datos != null) {
        let html = "";
        datos.datos.forEach(s => {
            html += `
                    <a
                    onclick="goPoint(${s.latitud}, ${s.longitud})"
                    class="list-group-item list-group-item-action"
                    aria-current="true"
                    >
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${s.nombre}</h5>
                    </div>
                    <p class="mb-1">${s.descripcion}</p>
                </a>
            `;
        });
        document.getElementById('lugares_mapa').innerHTML = html;
    }
}