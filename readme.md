# 🤑 Asesor de inversiones

Este proyecto es un sitio web para ayudar a los usuarios a gestionar sus inversiones, proporcionando información y herramientas útiles.

## Tabla de Contenidos
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución en Desarrollo](#ejecución-en-desarrollo)
- [Construcción y Ejecución en Producción](#construcción-y-ejecución-en-producción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación
Clona el repositorio: git clone https://github.com/tu-usuario/asesor-de-inversiones.git

Cambia al directorio del proyecto: cd asesor-de-inversiones

Instala las dependencias
```
$ npm install
```

## Ejecución en Desarrollo
Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador:

Ejecuta
```
$ npm run dev
```
Esto compilará los archivos SCSS, Pug y JS, y abrirá la aplicación en http://localhost:3000.

## Construcción y Ejecución en Producción
Para construir el proyecto y ejecutarlo en un entorno de producción:

Construye el proyecto:
```
$ npm build
```

Inicia el servidor de producción:
```
$ npm start
```

Esto generará los archivos optimizados y los servirá desde el servidor.

## Estructura del Proyecto
src/: Contiene el código fuente del proyecto.

app.js: Archivo principal de JavaScript.
scss/: Archivos SCSS para estilos.
assets/: Imágenes y otros recursos.
modules/: Módulos del proyecto.
pug/: Plantillas Pug para las vistas.
dist/: Carpeta generada para archivos de salida, incluyendo HTML, CSS y JS minificados.

## Despliegue
Para desplegar el proyecto, sigue las instrucciones específicas para tu servidor de producción. Asegúrate de que los archivos en la carpeta dist/ sean accesibles.

## Contribución
Si deseas contribuir al proyecto:
- Realiza un fork del repositorio.
- Crea una rama para tus cambios.
- Realiza un pull request con una descripción clara de tus modificaciones.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.