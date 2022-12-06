const navbar = document.querySelector('.header .navbar');
const menu_bar = document.querySelector('.bars');
const close_menu = document.querySelector('.close_bar');

menu_bar.onclick = () =>{
    navbar.classList.add('active');
}
close_menu.onclick = () =>{
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}