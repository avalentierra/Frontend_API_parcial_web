
 $(document).ready(function () {
    mostrarVentas();
});


function mostrarVentas() {
    $.ajax({
        url: "http://127.0.0.1:8000/api/sale",
        type: "GET",
        success: function (data) {
            var html = '';
            $.each(data, function (key, value) {
                html += '<tr>';
                html += '<td>' + value.id + '</td>';
                html += '<td>' + value.nombre_empleado + '</td>';
                html += '<td>' + value.nombre_cliente + '</td>';
                html += '<td>' + value.nombre_producto + '</td>';
                html += '<td>' + value.precio + '</td>';
                html += '<td>' + value.fecha_compra + '</td>';
                html += '<td><button class="btn" onclick="editarVenta(' + value.id + ')">Editar</button> <button class="btn" onclick="eliminarVenta(' + value.id + ')">Eliminar</button></td>';
                html += '</tr>';
            });
            $('#ventas-lista').html(html);
        },
        
    });
}


$('#formulario').submit(function (event) {
    event.preventDefault();
    var empleado = $('#nombre_empleado').val();
    var cliente = $('#nombre_cliente').val();
    var producto = $('#nombre_producto').val();
    var precio = $('#precio').val();
    var fecha_compra = $('#fecha_compra').val();

    $.ajax({
        url: "http://127.0.0.1:8000/api/sale",
        type: "POST",
        data: {
            nombre_empleado: empleado,
            nombre_cliente:cliente,
            nombre_producto:producto,
            precio: precio,
            fecha_compra:fecha_compra
        },
        success: function (data) {
            mostrarVentas();
        },
       
    });
});



function eliminarVenta(id) {
  
        $.ajax({
            url: "http://127.0.0.1:8000/api/sale/" + id,
            type: "DELETE",
            success: function (data) {
                mostrarVentas();
            },
          
        });
}