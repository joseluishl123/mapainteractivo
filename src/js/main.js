// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

urlBase = "http://localhost:8081/mapainteractivo/";
// var lugares = CargarUbucaciones();
var map = null;

function contenido(nombre, imagen, descripcion) {
    const contentString = `<div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">${nombre}</h5>
        </div>
            <img  src="${imagen}"
                  alt=""
                  style="width:100%;"/>
  <p>${descripcion}</p>`;
    return contentString;
}


async function initMap() {
    const uluru = { lat: 5.6953765148714615, lng: -76.65155875727395 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: uluru,
    });

    const infowindow = new google.maps.InfoWindow({
        content: contenido("s.nombre", "https://image.freepik.com/vector-gratis/circulo-neon-luz-redonda-futurista_158587-8.jpg", "s.descripcion")
    });


    const marker = new google.maps.Marker({
        position: uluru,
        map,
        title: 'Uluru (Ayers Rock)',
    });


    const marker100 = new google.maps.Marker({
        position: { lat: -7.366360733929082, lng: -64.67783582047444 },
        map,
        title: 'Uluru (Ayers Rock)',
    });


    // var lugares = CargarUbucaciones();
    var datos = await CargarUbucaciones();
    console.log(datos);
    var i = 0;
    datos.forEach(s => {
        i++;
        console.log(s.latitud, s.longitud);
        eval(`const marker` + i + ` = new google.maps.Marker({
            position: { lat: ${s.latitud}, lng: ${s.latitud} },
            map,
            title: '${s.nombre}',
        });
        
        marker` + i + `.addListener('click', () => {
            infowindow` + i + `.open(map, marker` + i + `);
        });

        const infowindow` + i + ` = new google.maps.InfoWindow({
            content: contenido("${s.nombre}", "${s.imagen}", "${s.descripcion}")
        });
        `)
    });

    marker.addListener('click', () => {
        infowindow.open(map, marker);
    });

    map.addListener('click', (e) => {
        placeMarkerAndPanTo(e.latLng, map);
        document.getElementById('Latitud').value = e.latLng.lat();
        document.getElementById('Longitud').value = e.latLng.lng();
    });

    function placeMarkerAndPanTo(latLng, map) {
        new google.maps.Marker({
            position: latLng,
            map: map,
        });
        map.panTo(latLng);
    }
}

function goPoint(lat, lng) {
    map.panTo(new google.maps.LatLng(lat, lng));
    map.setZoom(12);
}

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
            console.log(s.latitud, s.longitud);
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
    return datos.datos;
}