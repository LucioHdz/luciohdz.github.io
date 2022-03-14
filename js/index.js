
fetch('./js/urls.json').then(response => {
    return response.json();
})
.then(jsondata => {
    const proyectos = document.getElementById('proyectos');
    console.log(jsondata)
    
    jsondata.map((proyect) => {
        proyectos.innerHTML += '<div class="card">' +
            `<img src= "${proyect.img}" alt="proyecto" class="card__image">` +
            `<div><h3 class="card__title">${proyect.nombre}</h3>` +
            '<br><br>' +
            `<h4> ${proyect.descripcion}</h4>` +
            '<br><br><br>' +
            `<a href="${proyect.url}" class="card__link">Codigo</a>` +
            '</div>' +
            '</div>'
    })
    });
