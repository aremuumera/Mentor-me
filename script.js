const menu = document.querySelector('.check-icon');
const navBar = document.querySelector('.nav-bar');

let isClicked = true;
menu.addEventListener('change', function (e) {
    if (this.checked) {
        navBar.style.display = 'block';
        navBar.classList.add('slide-in-top');
    }else{
        navBar.style.display = 'none';
        // navBar.classList.add('slide-out-top');
        navBar.classList.remove('slide-in-top');
    }
})