// Scripts para animaciones del logo atómico quantum
document.addEventListener('DOMContentLoaded', () => {
    const planetsContainer = document.getElementById('planets-container');
    if (planetsContainer) {
        // Mostrar planetas después de la animación completa del logo (4s)
        // Logo: 3s + texto: 1s = 4s total antes de mostrar planetas
        setTimeout(() => {
            planetsContainer.classList.add('visible');
        }, 4000);
    }

    // Agregar efectos de hover adicionales para el logo
    const logoContainer = document.getElementById('logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('mouseenter', () => {
            logoContainer.style.transform = 'scale(1.05)';
            logoContainer.style.transition = 'transform 0.3s ease';
        });

        logoContainer.addEventListener('mouseleave', () => {
            logoContainer.style.transform = 'scale(1)';
        });
    }
});
