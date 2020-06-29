var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('#gradient');
var para = document.querySelector('p');

var setgradient = () => {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";

    para.innerHTML = body.style.background
}

color1.addEventListener('input', setgradient)
color2.addEventListener('input', setgradient)