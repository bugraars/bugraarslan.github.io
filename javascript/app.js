window.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded.');
    localStorage.setItem('mode','');
});
document.getElementById("theme-btn").addEventListener(('click'), () => {
    document.body.classList.toggle("dark");
    localStorage.setItem('mode', document.body.classList);
});

if (localStorage.getItem('mode') != '') {
    document.body.classList.add(localStorage.getItem('mode'));
}

