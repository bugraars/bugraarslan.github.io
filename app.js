const body = document.body;
const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const loading = document.querySelector("#loading");
const loaded = document.querySelectorAll(".loaded")
const aboutTitle = document.querySelector("#mainTitleText");

let texts = new Array();
texts.push(" BUĞRA ARSLAN");
texts.push(" A WEB DEVELOPER ");

let point = 0;
function changeTitle() {
    aboutTitle.innerHTML = `<h1>${texts[point]}</h1>`
    if (point < (texts.length - 1)) {
        point++;
    } else {
        point = 0;
    }
}
setInterval(changeTitle, 1500); /*Call it here*/
changeTitle();

window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('theme') == null) {
        localStorage.setItem('theme', 'light');
        body.classList.add("light");
    }
    else {
        body.classList.add(localStorage.getItem('theme'));
    }
});

function setTheme() {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList);
};
 window.addEventListener('load', event => {
    setTimeout(removeLoader, 1500);
    
});
function removeLoader(){
    loading.style.display = 'none';
}
    
// $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
// $(window).on('load', function(){
//   setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
// });
// function removeLoader(){
//     $( "#loadingDiv" ).fadeOut(500, function() {
//       // fadeOut complete. Remove the loading div
//       $( "#loadingDiv" ).remove(); //makes page more lightweight 
//   });  
// }