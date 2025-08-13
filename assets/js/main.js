/* ----- FUNCIÓN PARA MOSTRAR / OCULTAR MENÚ DE NAVEGACIÓN ----- */
function myMenuFunction(){
    // Obtiene el elemento del menú de navegación por su ID
    var menuBtn = document.getElementById("myNavMenu");
  
    // Si el menú tiene la clase "nav-menu" (estado normal)
    if(menuBtn.className === "nav-menu"){
        // Agrega la clase "responsive" para mostrarlo en modo móvil
        menuBtn.className += " responsive";
    } else {
        // Si ya tiene "responsive", lo vuelve al estado normal
        menuBtn.className = "nav-menu";
    }
}
  
/* ----- AGREGAR SOMBRA A LA BARRA DE NAVEGACIÓN MIENTRAS SE HACE SCROLL ----- */
// Ejecuta la función "headerShadow" cada vez que el usuario se desplaza
window.onscroll = function() {headerShadow()};
  
function headerShadow() {
    // Obtiene el elemento del encabezado por su ID
    const navHeader = document.getElementById("header");
  
    // Si el scroll vertical es mayor a 50px
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // Aplica una sombra al encabezado
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        // Reduce la altura del encabezado
        navHeader.style.height = "70px";
        // Ajusta la altura de línea del texto
        navHeader.style.lineHeight = "70px";
    } else {
        // Si el scroll es menor a 50px, quita la sombra
        navHeader.style.boxShadow = "none";
        // Restaura la altura original del encabezado
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}
  
/* ----- EFECTO DE TEXTO ESCRIBIÉNDOSE ----- */
// Crea una nueva animación de texto usando Typed.js
var typingEffect = new Typed(".typedText",{
    // Palabras que se escribirán
    strings : ["Developer","Innovator","Solution"],
    // Repetir en bucle
    loop : true,
    // Velocidad al escribir
    typeSpeed : 100, 
    // Velocidad al borrar
    backSpeed : 80,
    // Tiempo de espera antes de borrar
    backDelay : 2000
})
  
/* ----- ANIMACIÓN SCROLL REVEAL ----- */
// Configuración general de ScrollReveal
const sr = ScrollReveal({
    origin: 'top',       // Animación desde arriba
    distance: '80px',    // Distancia del desplazamiento
    duration: 2000,      // Duración en milisegundos
    reset: true          // Repetir animación al volver a la sección
})
  
/* -- ELEMENTOS DE LA SECCIÓN HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})
  
/* -- CAJAS DE PROYECTOS -- */
sr.reveal('.project-box',{interval: 200})
  
/* -- TÍTULOS DE SECCIÓN -- */
sr.reveal('.top-header',{})
  
/* ----- ANIMACIONES DESDE LA IZQUIERDA Y DERECHA ----- */
// Configuración para animar desde la izquierda
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
  
// Elementos que se revelan desde la izquierda
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
  
// Configuración para animar desde la derecha
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
  
// Elementos que se revelan desde la derecha
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})
  
/* ----- CAMBIAR EL ENLACE ACTIVO EN EL MENÚ SEGÚN EL SCROLL ----- */
// Selecciona todas las secciones que tienen un atributo "id"
const sections = document.querySelectorAll('section[id]')
  
function scrollActive() {
    // Obtiene la posición vertical actual del scroll
    const scrollY = window.scrollY;
  
    // Recorre cada sección
    sections.forEach(current =>{
        // Obtiene la altura de la sección
        const sectionHeight = current.offsetHeight,
              // Obtiene la distancia desde la parte superior de la página
              sectionTop = current.offsetTop - 50,
              // Obtiene el id de la sección
              sectionId = current.getAttribute('id')
  
        // Verifica si el scroll está dentro de los límites de la sección
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
            // Si está en la sección, añade la clase "active-link" al enlace correspondiente
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }  else {
            // Si no está en la sección, quita la clase "active-link"
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
  
// Escucha el evento de scroll y ejecuta scrollActive()
window.addEventListener('scroll', scrollActive)
