// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

// var lugares = CargarUbucaciones();
var map = null;
var latitud = null;
var marker = null;
let markers = [];
var _listaUbicaciones;
var _modificar;

function contenido(nombre, imagen, descripcion) {
    const contentString = `<div class="infowindow"><div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">${nombre}</h5>
        </div>
            <img  src="${imagen}"
                  alt=""
                  style="width:100%;"/>
  <p>${descripcion}</p></div>`;
    return contentString;
}

async function initMap() {
    const choco = { lat: 5.475626476596078, lng: -77.2524790653009 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: choco,
    });

    document.getElementById('confirmation-label').hidden = true;
    /* const infowindow = new google.maps.InfoWindow({
      content: contenido(
        'nombre',
        'https://image.freepik.com/vector-gratis/circulo-neon-luz-redonda-futurista_158587-8.jpg',
        'descripcion'
      ),
    });
   */
    /* const marker = new google.maps.Marker({
      position: choco,
      map,
      title: 'Chocó',
    });
  
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
   */

    // var lugares = CargarUbucaciones();
    var datos = await CargarUbucaciones();
    console.log(datos);

    if (datos.length > 0 && datos != null) {

        datos.forEach((s) => {
            // i++;
            let i = s.id;
            var imageb64 = "https://i.pinimg.com/736x/3a/ab/e0/3aabe0e9a520b9ad90407a82f85adb42.jpg";
            if (s.imagen != null && s.imagen!="") {
                imageb64 = atob(s.imagen);
            }
            console.log(s.latitud, s.longitud);
            eval(
                `const marker` +
                i +
                ` = new google.maps.Marker({
                position: { lat: ${s.latitud}, lng: ${s.longitud} },
                map,
                title: '${s.nombre}',
            });
        
            marker` +
                i +
                `.addListener('click', () => {
                infowindow` +
                i +
                `.open(map, marker` +
                i +
                `);
            });

            const infowindow` +
                i +
                ` = new google.maps.InfoWindow({
                content: contenido("${s.nombre}", "${imageb64}", "${s.descripcion}")
            });
            `
            );
        });
    }

    //console.log(marker);

    map.addListener('click', (e) => {
        if (markers.length > 0) {
            deleteMarkers();
            document.getElementById('confirmation-label').hidden = true;
        } else {
            document.getElementById('Latitud').value = e.latLng.lat();
            document.getElementById('Longitud').value = e.latLng.lng();
            document.getElementById('confirmation-label').hidden = false;
            map.panTo(e.latLng);
            addMarker(e.latLng);
        }
    });

    function addMarker(location) {
        const marker = new google.maps.Marker({
            position: location,
            map: map,
        });
        markers.push(marker);
    }

    function setMapOnAll(map) {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }
    function clearMarkers() {
        setMapOnAll(null);
    }

    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }

    function placeMarkerAndPanTo(latLng, map) {
        marker = google.maps.Marker({
            position: latLng,
        });
        marker.setMap(map);
    }
}

function goPoint(lat, lng, id) {
    map.panTo(new google.maps.LatLng(lat, lng));
    map.setZoom(9);
    cargarUbicacion(id);
}


async function GuardarUbicacion() {
    console.log(_modificar);

    if (_modificar) {
        var confirma = confirm("Desea actualizar la ubicación?");
        console.log(_modificar);

        return;
    }

    var nombre = document.getElementById('nombre_lugar').value;
    var latutd = document.getElementById('Latitud').value;
    var longitud = document.getElementById('Longitud').value;
    var descripcion = document.getElementById('descripcion_lugar').value;
    let data = {
        nombre: nombre,
        latitud: latutd,
        longitud: longitud,
        descripcion: descripcion,
        imagen: _fotoCargada,
    };
    _modificar = false;
    console.log(data);
    if (nombre == null || nombre == '') {
        alert('Ingrese un nombre ');
    }
    if (descripcion == null || descripcion == '') {
        alert('Ingrese una descripcion al lugar ');
        return;
    }
    if (latutd == null || latutd == '') {
        alert('Selecciona un lugar en el mapa');
        return;
    }

    if (longitud == null || longitud == '') {
        alert('Selecciona un lugar en el mapa');
        return;
    }

    let url = `${urlBase}/db/datos/add-lugar.php`;
    let respuesta = await POSTServidor(url, data, '');
    console.log(respuesta);
    await CargarUbucaciones();
    initMap();
    alert('La ubicación se ha guardado');
}

async function CargarUbucaciones(listaUbicaciones = null) {
    let datos;
    let html = '';
    if (listaUbicaciones == null) {
        datos = await GetServidorAsync(`${urlBase}db/datos/lista.php`);
        if (datos != null) {
            _listaUbicaciones = datos.datos;
            listaUbicaciones = datos.datos;
        }
    }

    _modificar = false;
    listaUbicaciones.forEach((s) => {
        console.log(s.latitud, s.longitud);
        html += `   
      <div class="item-list-ubications">
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
                <div class="action-buttons">
                 <a onclick="cargarUbicacion(${s.id})"> <i class="bi bi-pencil"></i>  </a>
                 <a onclick="EliminarUbicacion( ${s.id})"> <i class="bi bi-trash"></i> </a>
                </div>
                </div>
            `;
    });
    document.getElementById('lugares_mapa').innerHTML = html;
    return listaUbicaciones;
}


function cargarUbicacion(id) {
    _listaUbicaciones
    for (let index = 0; index < _listaUbicaciones.length; index++) {
        const element = _listaUbicaciones[index];
        if (element.id == id) {
            console.log("La nota es: ");
            document.getElementById("nombre_lugar").value = element.nombre;
            document.getElementById('Latitud').value = element.latitud;
            document.getElementById('Longitud').value = element.longitud;
            document.getElementById("descripcion_lugar").value = element.descripcion;
            var htmlPreview =
                '<img width="200" id="imagenBannerTemporal" src="' + atob(element.imagen) + '" />' +
                '<p>Imagen</p>';
            _fotoCargada = atob(element.imagen);
            document.getElementById("cargar_imagen").innerHTML = htmlPreview;
            _modificar = true;
            console.log(_modificar);
            // console.log(element);
            break;
        }

    }
}


async function EliminarUbicacion(id) {

    let data = {
        id: id
    };
    var confimar = confirm("Esta seguro de agregar la ubicación");
    if (confimar) {
        let url = `${urlBase}/db/datos/eliminar.php`;
        let respuesta = await POSTServidor(url, data, '');
        console.log(respuesta);
        await CargarUbucaciones();
        initMap();
        alert('La ubicación de ha agregado');
    }

}

//function BuscarUbicacion() {
//    var buscar = document.getElementById("filtro-ubicaciones").value;
//    filtro - ubicaciones
//}
function quitarAcentos(cadena) {
    const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
    return cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
}

$("#filtro-ubicaciones").keyup(function (event) {
    //if (event.keyCode == 13) {
    listaDi = [];
    var message = $("#filtro-ubicaciones").val();
    console.log(message);
    _listaUbicaciones.forEach(s => {
        var nombre = quitarAcentos(s.nombre.toLowerCase());
        if (nombre.includes(quitarAcentos(message.toLowerCase()))) {
            console.log(s);
            listaDi.push(s);
        }
    });
    console.log(listaDi);
    CargarUbucaciones(listaDi);
    //} else {
    //    return true;
    //}
});