const aboutTitle = document.querySelector("#changing-text");
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