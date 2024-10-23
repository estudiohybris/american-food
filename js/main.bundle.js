/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-http-backend */ "./node_modules/i18next-http-backend/esm/index.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-browser-languagedetector */ "./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__);
// Importa los estilos


// Importa i18next y sus plugins




// Importa jQuery primero
//import $ from 'jquery';
//window.$ = $;
//window.jQuery = $;

// Importa Bootstrap después de jQuery


// Importa AOS y su CSS



// Función para throttle (limitar la ejecución de una función)
function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
document.addEventListener('DOMContentLoaded', function () {
  // Inicializamos i18next
  i18next__WEBPACK_IMPORTED_MODULE_1__["default"].use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__["default"]).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__["default"]).init({
    fallbackLng: 'en',
    debug: true,
    // Verifica en la consola los archivos de traducción
    load: 'languageOnly',
    // Esto asegura que solo use 'es' o 'en', sin incluir el código regional
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json' // Asegúrate que esta ruta es correcta
    },
    interpolation: {
      escapeValue: false
    }
  }, function (err, t) {
    if (err) {
      console.error('Error al inicializar i18next:', err);
      return;
    }
    updateContent(); // Sólo llamamos a updateContent después de que se inicializa i18next
    setActiveLangButton(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language); // Establecer el idioma activo en la carga inicial
  });

  // Función para traducir el contenido de los elementos con data-i18n
  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var key = element.getAttribute('data-i18n');
      var translatedText = i18next__WEBPACK_IMPORTED_MODULE_1__["default"].t(key);
      element.innerHTML = translatedText; // Asigna la traducción al HTML del elemento
    });
    setActiveLangButton(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language); // Asegúrate de actualizar el botón activo al traducir
  }

  // Función para establecer el botón de idioma activo
  function setActiveLangButton(language) {
    document.querySelectorAll('.lang-switch').forEach(function (button) {
      if (button.getAttribute('data-lang') === language) {
        button.classList.add('active-lang'); // Agregar clase activa
      } else {
        button.classList.remove('active-lang'); // Remover clase activa
      }
    });
  }

  // Manejador de eventos para cambiar el idioma
  document.querySelectorAll('.lang-switch').forEach(function (button) {
    button.addEventListener('click', function () {
      var lang = this.getAttribute('data-lang');
      i18next__WEBPACK_IMPORTED_MODULE_1__["default"].changeLanguage(lang, function (err) {
        if (err) return console.error('Error al cambiar de idioma:', err);
        updateContent(); // Vuelve a traducir el contenido cuando se cambie el idioma
      });
    });
  });

  // Inicializar AOS cuando el DOM esté completamente cargado
  aos__WEBPACK_IMPORTED_MODULE_5___default.a.init({
    // Global settings:
    disable: function disable() {
      var maxWidth = 1023;
      return window.innerWidth < maxWidth;
    },
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    delay: 0,
    duration: 600,
    easing: 'linear',
    once: true,
    mirror: false
  });

  // Definir la función getOffsetTop()
  function getOffsetTop() {
    var header = document.querySelector('.navbar');
    return header ? header.offsetHeight : 0;
  }

  // Seleccionar el botón del toggler del menú (el ícono de hamburguesa) y el contenedor del menú
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarText = document.getElementById('navbarText');

  // Seleccionar todos los enlaces de la barra de navegación
  var navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

  // Función para manejar el scroll y actualizar el enlace activo
  function handleScroll() {
    var fromTop = window.scrollY + getOffsetTop();
    navLinks.forEach(function (link) {
      var section = document.querySelector(link.getAttribute('href'));
      if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page'); // Mejorar accesibilidad
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // Escuchar el evento de scroll para actualizar las clases activas con throttle
  window.addEventListener('scroll', throttle(handleScroll, 100));

  // También llamar la función de scroll al cargar la página para manejar la posición inicial
  handleScroll();

  // Función para cerrar el menú
  function closeMenu() {
    var collapseInstance = new bootstrap.Collapse(navbarText, {
      toggle: false
    });
    collapseInstance.hide();
    navbarToggler.setAttribute('aria-expanded', 'false');
  }

  // Escuchar los clics en los enlaces de la barra de navegación
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

      // Obtener el elemento de destino
      var targetId = navLink.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calcular la posición de desplazamiento
        var targetPosition = targetElement.offsetTop - getOffsetTop();

        // Desplazarse suavemente hasta la posición deseada
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Actualizar las clases activas
        navLinks.forEach(function (link) {
          return link.classList.remove('active');
        });
        navLink.classList.add('active');
      }

      // Cerrar el menú en dispositivos móviles
      closeMenu();
    });
  });

  // Evento para saber cuándo el menú está abierto
  navbarText.addEventListener('shown.bs.collapse', function () {
    // Ocultar el navbar-toggler
    navbarToggler.style.display = 'none';
  });

  // Evento para saber cuándo el menú está cerrado
  navbarText.addEventListener('hidden.bs.collapse', function () {
    // Mostrar el navbar-toggler
    navbarToggler.style.display = 'block';
  });
  var form = document.getElementById('formContact'); // Selecciona el formulario
  var formResponse = document.getElementById('formContactResponse'); // Contenedor para los mensajes de respuesta

  // Manejador de evento para el envío del formulario
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previene la recarga de la página

    // Verificar si el formulario es válido
    if (!form.checkValidity()) {
      formResponse.innerHTML = '<i class="fal fa-times fa-fw"></i> Datos requeridos incompletos (*)';
      return;
    }

    // Crear un objeto FormData para serializar los datos del formulario
    var formData = new FormData(form);

    // Enviar los datos con fetch
    fetch('assets/process/contact.php', {
      method: 'POST',
      body: formData
    }).then(function (response) {
      return response.text();
    }) // Convertimos la respuesta a texto
    .then(function (responseText) {
      // Manejar la respuesta del servidor
      switch (responseText) {
        case 'success':
          form.reset(); // Resetea el formulario si el envío fue exitoso
          formResponse.innerHTML = '<i class="fal fa-check fa-fw"></i> Mensaje enviado con éxito!';
          break;
        case 'error':
          formResponse.innerHTML = '<i class="fal fa-times fa-fw"></i> Existen errores en la transacción.';
          break;
        default:
          formResponse.innerHTML = '<i class="fal fa-times fa-fw"></i> ' + responseText;
          break;
      }
    })["catch"](function (error) {
      // Manejar cualquier error en la comunicación con el servidor
      console.error('Error en la solicitud:', error);
      formResponse.innerHTML = '<i class="fal fa-times fa-fw"></i> Error al conectar con el servidor.';
    });
  });
});

// Añadir sombra a la navbar al hacer scroll sin jQuery
document.addEventListener('scroll', throttle(function () {
  var scroll = window.scrollY;
  document.querySelector(".navbar.navbar-expand-lg").classList.toggle("shadow", scroll > 0);
}, 100));

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map