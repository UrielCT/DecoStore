// Cargamos el archivo JSON
function cargarDatos(){
    fetch('./src/lamparas.json')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('contenedor_lamparas');
        let div = ``;

        data.lamparas.forEach(lampara => {
            div += `
            <div class="lampara">
                <img class="lampara__imagen" src="${lampara.imagen}" alt="${lampara.nombre}">
                <div class="lampara__contenido">
                    <h2 class="lampara__nombre">${lampara.nombre} </h2>
                    <p class="lampara__descripcion">${lampara.descripcion}</p>
                    <h3 class="lampara__precio">$${lampara.precio} </h2>
                </div>
            </div>
            `;
        });

        div += `
            <div class="grafico grafico--imagenA"></div>
            <div class="grafico grafico--imagenB"></div>
        `;

        contenedor.innerHTML = div;
    });
}
cargarDatos();



