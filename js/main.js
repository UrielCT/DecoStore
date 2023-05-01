// Cargamos el archivo JSON
function cargarDatos(){
    fetch('./src/lamparas.json')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('contenedor');
        let div = ``;

        data.lamparas.forEach(lampara => {
            div += `
            <div class="card">
                <img src="${lampara.imagen}" alt="${lampara.nombre}">
                <h2>${lampara.nombre} </h2>
                <p>Edad: ${lampara.descripcion}</p>
                <h3>${lampara.precio} </h2>
            </div>
            `;
            
            contenedor.innerHTML = div;
        });
    });
}
cargarDatos();



