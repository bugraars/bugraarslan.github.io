// document.getElementById("theme-btn").addEventListener(('click'), () => {
//     document.body.classList.toggle('dark');
//     localStorage.setItem('mode',document.body.classList);
// });

// if (localStorage.getItem('mode') != '') {
//     document.body.classList.add(localStorage.getItem('mode'));
// }

const body = document.body;

window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('theme') == null) {
        localStorage.setItem('theme', 'light');
        body.classList.add("light");
    }
    else{
        body.classList.add(localStorage.getItem('theme'));
    }  
});

document.getElementById("theme-btn").addEventListener(('click'), () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    localStorage.setItem('theme',document.body.classList);
});
