// Scripts para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const planetsContainer = document.getElementById('planets-container');
    if (planetsContainer) {
        // Mostrar planetas después de la animación del logo (3.5s)
        setTimeout(() => {
            planetsContainer.classList.add('visible');
        }, 3500);
    }
});
