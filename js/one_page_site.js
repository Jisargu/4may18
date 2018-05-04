function cargarDatos(){
    var ID_A_MODIFICAR= "contenedor";
    var objectEtiqueta='<object\
                        type="text/html"\
                        data="biografia.html"\
                        style="width:100%; height:900px;"></object>\
    ';
    document.getElementById(ID_A_MODIFICAR).innerHTML = objectEtiqueta;
}

function cargarContacto(){
    var ID_A_MODIFICAR= "contenedor"
    var objectEtiqueta='<object\
                        type="text/html"\
                        data="contacto.html"\
                        style="width:100%; height:900px;"></object>\
    ';
    document.getElementById(ID_A_MODIFICAR).innerHTML = objectEtiqueta;
}