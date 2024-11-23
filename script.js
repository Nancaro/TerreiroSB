// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');

    // Añadir funcionalidad de scroll suave para los enlaces del menú
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            const targetId = link.getAttribute('href').slice(1); // Obtiene el ID del destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajuste de espacio superior
                    behavior: 'smooth', // Efecto de desplazamiento suave
                });
            }
        });
    });

    // Agregar interacción visual al pasar sobre las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
        });

        section.addEventListener('mouseout', () => {
            section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});
