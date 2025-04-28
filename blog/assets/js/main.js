document.addEventListener('DOMContentLoaded', () => {
    // Cargar el header y el footer
    loadComponent('header', '../../components/header.html');
    loadComponent('footer', '../../components/footer.html');

    // const countryNameElement = document.getElementById('country-name');


    // if (countryNameElement) {
    //     const path = window.location.pathname.toLowerCase();

    //     let country = '';

    //     // Determinar el nombre del país basándose en la URL
    //     if (path.includes('alemania')) {
    //         country = 'Alemania';
    //     } else if (path.includes('italia')) {
    //         country = 'Italia';
    //     } else if (path.includes('grecia')) {
    //         country = 'Grecia';
    //     } else {
    //         country = 'Egipto';
    //     }

    //     // Insertar el nombre del país en el elemento correspondiente
    //     console.log(country);
        // countryNameElement.innerHTML = `<b>${country}</b>`;

        // Actualizar el enlace del país
        // const countryLink = document.querySelector('.flag-link');
        // countryLink.href = `${country.toLowerCase()}.html`;
    // }
});

// Función para cargar header o footer
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error cargando el componente:', error));
}
