var _fotoCargada ="";

function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            _fotoActual = e.target.result;
            //document.getElementById("cargar_imagen").innerHTML = "";
            var htmlPreview =
                '<img width="200" id="imagenBannerTemporal" src="' + e.target.result + '" />' +
                '<p id="nombreImagen">' + input.files[0].name + '</p>';
            _fotoCargada = e.target.result;
            var encodedStringBtoA = btoa(_fotoCargada);
            // console.log(encodedStringBtoA);

            // var decodedStringAtoB = atob(encodedStringBtoA);
            // console.log(decodedStringAtoB);
            _fotoCargada = encodedStringBtoA;
            console.log(_fotoCargada);
            var wrapperZone = $(input).parent();
            var previewZone = $(input).parent().parent().find('.preview-zone');
            var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');

            wrapperZone.removeClass('dragover');
            previewZone.removeClass('hidden');
            boxZone.empty();
            boxZone.append(htmlPreview);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function reset(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
}

$(".dropzone").change(function() {
    readFile(this);
});

$('.dropzone-wrapper').on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
});

$('.dropzone-wrapper').on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
});

$('.remove-preview').on('click', function() {
    var boxZone = $(this).parents('.preview-zone').find('.box-body');
    var previewZone = $(this).parents('.preview-zone');
    var dropzone = $(this).parents('.form-group').find('.dropzone');
    boxZone.empty();
    _modificar = false;
    _fotoCargada = "";
    previewZone.addClass('hidden');
    reset(dropzone);

     if (document.getElementById("imagenBannerTemporal2")) {
        document.getElementById("nombreImagen2").innerHTML = ""
        document.getElementById("imagenBannerTemporal2").src = ""
    }    
});

