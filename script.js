const seacrh = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    seacrh.classList.toggle('active')
    input.focus()
})