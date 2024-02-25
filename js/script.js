// navbar dropdown
// cara mengakses dengan mengecilkan tab web browser menjadi seukuran mobile. atau bisa menggunakan fitur inspect di google chrome lalu perkecil ukuran layarnya

const menuToogle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToogle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});

