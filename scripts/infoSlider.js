let infoIndex = 1;
showInfo(infoIndex);

function plusSlides(n) {
    showInfo(infoIndex += n);
}

function showInfo(n) {
    let i;
    let info = document.getElementsByClassName("information");
    if (n > info.length) {infoIndex = 1}
    if (n < 1) {infoIndex = info.length}
    for (i = 0; i < info.length; i++) {
        info[i].style.display = "none";
    }
    info[infoIndex-1].style.display = "block";

}


