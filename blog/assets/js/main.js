document.addEventListener('DOMContentLoaded', () => {
    // Calcular la profundidad de la ruta
    const depth = window.location.pathname.split('/').length - 2;

    let prefix = '';
    for (let i = 0; i < depth; i++) {
        prefix += '../';
    }

    // Cargar el header y el footer
    loadComponent('header', prefix + 'components/header.html');
    loadComponent('footer', prefix + 'components/footer.html');

    const countryNameElement = document.getElementById('country-name');

    if (countryNameElement) {
        const path = window.location.pathname.toLowerCase();

        let country = '';

        // Determinar el nombre del país basándose en la URL
        if (path.includes('alemania')) {
            country = 'Alemania';
        } else if (path.includes('italia')) {
            country = 'Italia';
        } else if (path.includes('espana')) {
            country = 'España';
        } else {
            country = ''; // Página principal
        }

        // Insertar el nombre del país en el elemento correspondiente
        countryNameElement.innerHTML = `<b>${country}</b>`;

        // Actualizar el enlace del país
        const countryLink = document.querySelector('.flag-link');
        countryLink.href = `${country.toLowerCase()}.html`;
    }
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
