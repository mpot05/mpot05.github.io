

function loadCalc() {
    localStorage.setItem("SrcLink", "https://github.com/mpot05/first-calculator-app")
    localStorage.setItem("SrcImg", "/images/calc_image.png")
    localStorage.setItem("Title", "Calculator App")
}

window.onload = function() {
    document.getElementById("Image").src = localStorage.getItem("SrcImg")
    document.getElementById("Link").innerText = localStorage.getItem("SrcLink")
    document.getElementById("title").innerHTML = localStorage.getItem("Title")
}