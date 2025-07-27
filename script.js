// Navegación entre páginas
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Función para cambiar de página con efecto de parpadeo diferenciado
    function showPage(pageId) {
        // Ocultar todas las páginas con parpadeo
        pages.forEach(page => {
            if (page.classList.contains('active')) {
                // Ocultar header primero (más rápido)
                const header = page.querySelector('.header');
                if (header) {
                    header.style.opacity = '0';
                }
                
                // Ocultar contenido principal después
                const mainContent = page.querySelector('.main-content');
                if (mainContent) {
                    mainContent.style.opacity = '0';
                }
                
                setTimeout(() => {
                    page.classList.remove('active');
                    if (header) header.style.opacity = '';
                    if (mainContent) mainContent.style.opacity = '';
                }, 150);
            } else {
                page.classList.remove('active');
            }
        });

        // Mostrar la página seleccionada con parpadeo diferenciado
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            setTimeout(() => {
                targetPage.classList.add('active');
                
                // Mostrar header primero (más rápido)
                const header = targetPage.querySelector('.header');
                if (header) {
                    header.style.opacity = '0';
                    setTimeout(() => {
                        header.style.opacity = '1';
                    }, 10);
                }
                
                // Mostrar contenido principal después (más lento)
                const mainContent = targetPage.querySelector('.main-content');
                if (mainContent) {
                    mainContent.style.opacity = '0';
                    setTimeout(() => {
                        mainContent.style.opacity = '1';
                    }, 50);
                }
            }, 150);
        }

        // Actualizar navegación activa
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Event listeners para navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            
            // Actualizar URL sin recargar la página
            history.pushState(null, null, `#${pageId}`);
        });
    });

    // Manejar navegación con botones del navegador
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.slice(1) || 'inicio';
        showPage(hash);
    });

    // Mostrar página inicial basada en hash de URL
    const initialPage = window.location.hash.slice(1) || 'inicio';
    showPage(initialPage);
}); 