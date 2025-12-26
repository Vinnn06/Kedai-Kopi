// Toggle class active 
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

//klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// function untuk menghilangkan path #about dll
function scrollToSection(event, id) {
  event.preventDefault(); // mencegah lompat ke home

    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const iconSearch = document.querySelector('.search-icon');

// ketika icon search di klik
document.querySelector('#search').onclick = (e) => {
    iconSearch.classList.toggle('active');
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// klik di luar search form untuk menghilangkan search form 
const search = document.querySelector('#search');
document.addEventListener('click', function(e) {
    if(!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

document.addEventListener('click', function(e) {
    if(!search.contains(e.target) && !iconSearch.contains(e.target)) {
        iconSearch.classList.remove('active');
    }
});

// Toggle class active untuk shopping cart
const cartIcon = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-btn').onclick = (e) => {
    cartIcon.classList.toggle('active');
    e.preventDefault();
}

// klik di luar shopping cart untuk menghilangkan shopping cart
const shpCart = document.querySelector('#shopping-cart-btn');
document.addEventListener('click', function(e) {
    if(!shpCart.contains(e.target) && !cartIcon.contains(e.target)) {
        cartIcon.classList.remove('active');
    }
});


// Modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailBtn =document.querySelectorAll('.item-detail-btn');

itemDetailBtn.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
})


// klik tombol close 
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
    if(e.target === itemDetailModal){
        itemDetailModal.style.display = 'none';
    }
};
