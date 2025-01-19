# AluraFlix

**AluraFlix** es una aplicación web inspirada en plataformas de streaming, diseñada para gestionar y explorar contenido multimedia. Este proyecto se desarrolla como parte de un desafío de Alura, utilizando tecnologías modernas para crear una experiencia interactiva y eficiente.

## Características principales

- **Exploración de contenido**: Navega por una lista de videos organizados por categorías.
- **Agregar contenido**: Permite a los usuarios añadir nuevos videos con detalles como título, URL y descripción.
- **Diseño interactivo**: Interfaz responsiva y amigable, adaptada para dispositivos móviles y de escritorio.
- **Validación de datos**: Asegura que los datos ingresados por el usuario sean válidos.

## Tecnologías utilizadas

- **Frontend**:
  - [React](https://reactjs.org/): Biblioteca para construir interfaces de usuario.
  - [Vite](https://vitejs.dev/): Herramienta para el desarrollo rápido de aplicaciones web.
  - [CSS3](https://developer.mozilla.org/es/docs/Web/CSS): Estilización y diseño responsivo.
- **Backend**:
  - Simulado o no incluido directamente (según los archivos actuales).
- **Herramientas adicionales**:
  - ESLint: Linter para mantener código limpio y uniforme.
  - Node.js: Gestión de dependencias.

## Instalación y configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/AluraFlix.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd AluraFlix
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:5173` para ver la aplicación en funcionamiento.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run lint`: Ejecuta el linter para verificar problemas de estilo.

## Estructura del proyecto

```
AluraFlix/
├── public/          # Recursos públicos (imágenes, favicon, etc.)
├── src/             # Código fuente principal
│   ├── components/  # Componentes reutilizables
│   ├── App.jsx      # Componente principal
│   └── index.jsx    # Punto de entrada
├── package.json     # Dependencias y scripts
├── vite.config.js   # Configuración de Vite
└── README.md        # Documentación del proyecto
```

## Próximas mejoras

- Integración con una base de datos para persistir el contenido.
- Implementación de autenticación de usuarios.
- Mejora del diseño visual y experiencia del usuario.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios:
   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Añadida nueva funcionalidad"
   ```
4. Envía tus cambios:
   ```bash
   git push origin mi-nueva-funcionalidad
   ```
5. Abre un pull request en GitHub.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

**Desarrollado con ❤️ por David Santiago Valencia Blanco.**
