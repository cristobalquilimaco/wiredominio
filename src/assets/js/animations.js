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