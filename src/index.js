import "nes.css/css/nes.min.css";
import './style.css';

const form = document.querySelector('form');
const fd = [];

form.addEventListener('submit', (e) => {
    const data = new URLSearchParams(new FormData(form).entries());
    fd.push(data)
    e.preventDefault();
})
