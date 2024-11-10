function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    menuMobile.classList.toggle('open');
    
    if (menuMobile.classList.contains('open')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
}
