# QUANTUM DAO

Un sitio web interactivo con temática espacial/quantum que presenta el ecosistema QUANTUM DAO. Incluye una animación de logo tipo Latice seguida de planetas orbitantes que funcionan como enlaces de navegación a diferentes servicios del ecosistema.

## ✨ Características

- **Logo atómico quantum**: Logo SVG animado con órbitas electrónicas y esfera central azul
- **Animaciones orbitales**: Electrones orbitando alrededor del núcleo con diferentes velocidades
- **Sistema planetario interactivo**: 6 planetas orbitantes que representan diferentes servicios
- **Diseño responsive**: Optimizado para dispositivos móviles y desktop
- **Tema dark space**: Fondo azul navy oscuro (#05162B) con efectos neón
- **Hover effects**: Tooltips y efectos visuales al interactuar con los planetas
- **Navegación intuitiva**: Cada planeta enlaza a un servicio específico del ecosistema

## 🌍 Planetas y Servicios

| Planeta | Servicio | Enlace |
|---------|----------|---------|
| 🪐 **Planeta 1** | Quantum Wealth Academy | [https://quantum-wealth-aura.lovable.app/](https://quantum-wealth-aura.lovable.app/) |
| 🪐 **Planeta 2** | Quantum Wallet | [https://maucxto.github.io/quantum-wallet/](https://maucxto.github.io/quantum-wallet/) |
| 🪐 **Planeta 3** | QuantumLabs | #labs |
| 🪐 **Planeta 4** | Quantum ReFi | #refi |
| 🪐 **Planeta 5** | Quantum Hub | #hub |
| 🪐 **Planeta 6** | Quantum Space | #space |

## 📁 Estructura del Proyecto

```
quantum-dao/
├── index.html              # Página principal
├── wallet.html             # Aplicación wallet separada
├── README.md              # Documentación
├── css/
│   ├── styles.css         # Estilos principales y colores
│   └── animations.css     # Animaciones CSS
└── js/
    ├── main.js            # Scripts principales
    └── animations.js      # Control de animaciones
```

## 🚀 Tecnologías

- **HTML5**: Estructura semántica y moderna
- **CSS3**: Animaciones, gradients radiales, efectos hover
- **JavaScript**: Control de animaciones y efectos interactivos
- **Google Fonts**: Tipografía Inter
- **Responsive Design**: Media queries para móviles

## 🎨 Paleta de Colores

```css
:root {
    --primary: #0a1929;        /* Azul profundo */
    --accent: #00d9ff;         /* Cyan neón */
    --secondary: #5a67d8;      /* Azul lavanda */
    --highlight: #ffd32d;      /* Amarillo dorado */
    --bg-color: #05162B;       /* Fondo azul navy oscuro */
}
```

## ⚡ Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/maucxto/quantum-dao.git
   cd quantum-dao
   ```

2. **Abrir en navegador**:
   - Simplemente abre `index.html` en tu navegador web
   - No requiere servidor local para funcionamiento básico

3. **Para desarrollo**:
   - Usa un servidor local como Live Server (VS Code extension)
   - O Python: `python -m http.server 8000`

## 🔧 Personalización

### Modificar enlaces de planetas
Edita el archivo `index.html` y actualiza los atributos `href` en los elementos `<a class="planet">`.

### Cambiar colores
Modifica las variables CSS en `css/styles.css` dentro del selector `:root`.

### Añadir animaciones
Extiende `css/animations.css` y `js/animations.js` para nuevas funcionalidades.

## 📱 Responsive Design

- **Desktop**: Logo atómico (128px), planetas en órbita completa (400px diámetro)
- **Mobile**: Logo atómico (102px), planetas en órbita reducida (300px diámetro)
- **Breakpoints**: Optimizado para pantallas menores a 768px

## 🔄 Historial de Cambios

- **v1.0**: Lanzamiento inicial con logo animado y sistema planetario
- **v1.1**: Actualización de enlaces y cambio de color de fondo a azul oscuro
- **v1.2**: Optimización responsive y mejoras en efectos hover
- **v1.3**: Cambio de color de fondo a azul navy oscuro (#002348ff)
- **v1.4**: Implementación de logo atómico quantum con órbitas electrónicas y animaciones orbitales
- **v1.5**: Cambio de color de fondo a azul navy oscuro (#05162B)
- **v1.6**: Reducción del tamaño del logo atómico en 15% (128px desktop, 102px mobile)

## 📄 Licencia

Este proyecto es parte del ecosistema QUANTUM DAO.

---

**Repositorio**: [https://github.com/maucxto/quantum-dao](https://github.com/maucxto/quantum-dao)
