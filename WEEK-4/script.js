let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}

/*Dark/Light Mode - local storage*/
if (localStorage.getItem('theme') == 'dark')
    setDarkMode()

function myFunction() {
    let emoticon = '<i class="fa-sharp fa-solid fa-mug-hot"></i>'
    let isDark = document.footer.classList.toggle('darkmode')

    if (isDark) {
        emoticon = '<i class="fa-sharp fa-solid fa-mug-hot"></i>'
        localStorage.setItem('theme', 'dark');
    } else {
        emoticon = '<i class="fa-sharp fa-light fa-mug-hot"></i>'
        localStorage.removeItem('theme')
    }
    document.getElementById('switch').innerHTML = emoticon
}


