
var btnMenu = document.getElementById('btn-menu');
var menuNav = document.getElementById('menu-nav');


btnMenu.addEventListener('click', function () {
  btnMenu.classList.toggle('abierto');
  menuNav.classList.toggle('abierto');
});


var enlacesNav = menuNav.querySelectorAll('a');

for (var i = 0; i < enlacesNav.length; i++) {
  enlacesNav[i].addEventListener('click', function () {
    btnMenu.classList.remove('abierto');
    menuNav.classList.remove('abierto');
  });
}




var lightbox         = document.getElementById('lightbox');
var lightboxImg      = document.getElementById('lightbox-img');
var btnCerrar        = document.getElementById('lightbox-cerrar');
var btnAnterior      = document.getElementById('lightbox-anterior');
var btnSiguiente     = document.getElementById('lightbox-siguiente');


var imagenes = document.querySelectorAll('.portfolio-grid img');
var indiceActual = 0;


function abrirLightbox(indice) {
  indiceActual = indice;
  lightboxImg.src = imagenes[indiceActual].src;
  lightboxImg.alt = imagenes[indiceActual].alt;
  lightbox.style.display = 'flex';
}


function cerrarLightbox() {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
}


function irAnterior() {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  lightboxImg.src = imagenes[indiceActual].src;
  lightboxImg.alt = imagenes[indiceActual].alt;
}


function irSiguiente() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  lightboxImg.src = imagenes[indiceActual].src;
  lightboxImg.alt = imagenes[indiceActual].alt;
}


for (var j = 0; j < imagenes.length; j++) {
  
  (function (indice) {
    imagenes[indice].addEventListener('click', function () {
      abrirLightbox(indice);
    });
  })(j);
}


btnCerrar.addEventListener('click', cerrarLightbox);
btnAnterior.addEventListener('click', irAnterior);
btnSiguiente.addEventListener('click', irSiguiente);


lightbox.addEventListener('click', function (evento) {
  if (evento.target === lightbox) {
    cerrarLightbox();
  }
});


document.addEventListener('keydown', function (evento) {
  if (lightbox.style.display === 'flex') {
    if (evento.key === 'Escape')      { cerrarLightbox(); }
    if (evento.key === 'ArrowLeft')   { irAnterior(); }
    if (evento.key === 'ArrowRight')  { irSiguiente(); }
  }
});



var btnEnviar    = document.getElementById('btn-enviar');
var inputNombre  = document.getElementById('nombre');
var inputEmail   = document.getElementById('email');
var inputMensaje = document.getElementById('mensaje');
var errorNombre  = document.getElementById('error-nombre');
var errorEmail   = document.getElementById('error-email');
var errorMensaje = document.getElementById('error-mensaje');
var msgExito     = document.getElementById('msg-exito');

btnEnviar.addEventListener('click', function () {

  
  errorNombre.textContent  = '';
  errorEmail.textContent   = '';
  errorMensaje.textContent = '';
  msgExito.textContent     = '';
  inputNombre.classList.remove('campo-error');
  inputEmail.classList.remove('campo-error');
  inputMensaje.classList.remove('campo-error');

  var hayErrores = false;

  
  if (inputNombre.value.trim() === '') {
    errorNombre.textContent = 'Por favor, escribe tu nombre.';
    inputNombre.classList.add('campo-error');
    hayErrores = true;
  }

  
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (inputEmail.value.trim() === '') {
    errorEmail.textContent = 'Por favor, escribe tu email.';
    inputEmail.classList.add('campo-error');
    hayErrores = true;
  } else if (!regexEmail.test(inputEmail.value.trim())) {
    errorEmail.textContent = 'El formato del email no es válido.';
    inputEmail.classList.add('campo-error');
    hayErrores = true;
  }

  
  if (inputMensaje.value.trim() === '') {
    errorMensaje.textContent = 'Por favor, escribe tu mensaje.';
    inputMensaje.classList.add('campo-error');
    hayErrores = true;
  }

  
  if (!hayErrores) {
    msgExito.textContent = '¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.';
    inputNombre.value  = '';
    inputEmail.value   = '';
    inputMensaje.value = '';
  }

});
