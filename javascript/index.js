const aboutTitle = document.querySelector("#changing-text");
        let texts = new Array();
        texts.push(" a web developer <i class='fa-solid fa-code'></i>");
        texts.push(" a photographer <i class='fa-solid fa-camera'></i>");
        texts.push(" a music-lover <i class='fa-solid fa-music'></i>");

        let point = 0;
        function changeTitle() {
            aboutTitle.innerHTML = `<h3>${texts[point]}</h3>`
            if (point < (texts.length - 1)) {
                point++;
            } else {
                point = 0;
            }
        }
        setInterval(changeTitle, 1000); /*Call it here*/
        changeTitle();