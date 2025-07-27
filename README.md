# Eva Mobile - Web de Descarga

Una web súper rápida y optimizada para mostrar los códigos QR de descarga de la aplicación Eva Mobile.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y moderna con los colores oficiales de Eva Mobile
- **Responsive**: Se adapta perfectamente a todos los dispositivos
- **Optimizada**: Carga súper rápida con HTML, CSS y JavaScript vanilla
- **Animaciones**: Efectos suaves y profesionales
- **Instrucciones**: Guías claras para Android e iOS

## 🎨 Colores de Eva Mobile

- **Primario**: `#244577` (Azul oscuro)
- **Secundario**: `#6c757d` (Gris)
- **Fondo**: `#06121e` (Azul muy oscuro)
- **Texto**: `#fcfcfc` (Blanco)
- **Énfasis**: `#007BFF` (Azul eléctrico)

## 📱 Instrucciones por Plataforma

### Android
1. 📱 Escanea el código QR
2. ⚙️ Ve a Configuración > Seguridad
3. 🔓 Activa "Orígenes desconocidos"
4. 📥 Instala la aplicación

### iOS
1. 📱 Escanea el código QR
2. ⚙️ Ve a Configuración > General
3. 👨‍💻 Activa "Modo desarrollador"
4. 📥 Instala la aplicación

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS
- **JavaScript Vanilla**: Funcionalidad sin dependencias
- **Google Fonts**: Tipografía Inter
- **CSS Grid & Flexbox**: Layout responsivo

## 🚀 Cómo Ejecutar

### Opción 1: Servidor Local Simple
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (si tienes npx)
npx serve .
```

### Opción 2: Live Server (VS Code)
1. Instala la extensión "Live Server"
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 3: Servidor PHP
```bash
php -S localhost:8000
```

## 📁 Estructura del Proyecto

```
eva-mobile-website/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
└── README.md           # Documentación
```

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:

```css
:root {
    --primary: #244577;
    --secondary: #6c757d;
    --background: #06121e;
    --text-white: #fcfcfc;
    --electric: #007BFF;
}
```

### Agregar QR Reales
1. Reemplaza los placeholders en `index.html`
2. Usa una librería como `qrcode.js` en `script.js`
3. Genera los QR con las URLs de descarga reales

## 📊 Optimizaciones Implementadas

- ✅ **Lazy Loading**: Contenido se carga cuando es visible
- ✅ **Intersection Observer**: Animaciones eficientes
- ✅ **CSS Variables**: Fácil personalización
- ✅ **Responsive Design**: Adaptable a todos los dispositivos
- ✅ **Performance**: Optimizado para velocidad
- ✅ **Accessibility**: Estructura semántica

## 🌐 Despliegue

### GitHub Pages
1. Sube el código a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará disponible en `https://usuario.github.io/repositorio`

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el directorio de build como `/`
3. Despliega automáticamente

### Vercel
1. Conecta tu repositorio a Vercel
2. Configura como proyecto estático
3. Despliega con un click

## 📞 Soporte

Para cualquier pregunta o problema, contacta al equipo de desarrollo de Eva Mobile.

---

**Desarrollado con ❤️ para Eva Mobile** 