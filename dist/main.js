const position = document.querySelector("li[position='teamviewer']");
position.addEventListener("mouseover", (event) => {
    document.querySelector('.hero-overlay').style.backgroundColor = "rgba(5, 10, 82, 0.5)";
});
