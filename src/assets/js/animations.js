function toggleMenu(){
    const menuList = document.querySelector('.principal__menu__mobile');
    
    if(window.innerWidth <= 700) {
        menuList.style.display = (menuList.style.display === 'none' || menuList.style.display === 'none') ? 'block' : 'none';
    }else {
        menuList.style.display = 'none'
    }
}

window.addEventListener('resize', ()=>{
    toggleMenu(false)
})

function toggleVisibility(){
    const menuList = document.querySelector('.sub__menu__2_mobile');
    
    if(window.innerWidth <= 700) {
        menuList.style.display = (menuList.style.display === 'none' || menuList.style.display === 'none') ? 'block' : 'none';
    }else {
        menuList.style.display = 'none'
    }
}

window.addEventListener('resize', ()=>{
    toggleVisibility()
})

// ANIMATION CARDS


// LOADING PAGE

// document.addEventListener("DOMContentLoaded", function() {
//     const loader = document.getElementById('loader');

//     setTimeout(() => {
//         loader.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }, 3000); 
// });


document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
});


// SCROLL EFFECT

// animations.js

// Función que maneja la animación en el scroll
const handleScrollEffect = (selectors, offset = 0.8) => {
    const handleScroll = () => {
      selectors.forEach(selector => {
        // Selecciona los elementos que coinciden con el selector
        const elements = document.querySelectorAll(selector);
        if (elements.length === 0) return;
  
        elements.forEach(element => {
          // Obtenemos la posición del elemento respecto a la ventana
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
  
          // Si el elemento está dentro del offset, se agrega la clase 'animate-scroll'
          if (elementPosition < windowHeight * offset) {
            element.classList.add('animate-scroll');
          }
        });
      });
    };
  
    // Ejecutamos la función de scroll al cargar la página por primera vez
    handleScroll();
  
    // Agregar el evento de scroll para ejecutar la función cada vez que el usuario haga scroll
    window.addEventListener('scroll', handleScroll);
  
    // Eliminar el eventListener si es necesario (por ejemplo, al hacer un cleanup)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };
  
  // Asegurarnos de que el DOM esté cargado antes de ejecutar la función
  document.addEventListener('DOMContentLoaded', () => {
    // Llamamos a la función handleScrollEffect y le pasamos los selectores
    handleScrollEffect(['.animatin', '.animatin_reverse'], 0.8);
  });
  