let elems = document.getElementsByClassName('t-bubble-background');

function getRandomStringNumber(min, max) {
    return (" ".toString() +  (Math.floor(Math.random() * (max - min + 1)) + min).toString() + " ".toString());
}

// M 405 220 C 270 265 165 310 105 250 C 60 205 15 130 90 55 C 165 -35 345 10 465 70 C 525 100 510 175 405 220 Z

for (let i=0; i<elems.length; i++) {

    let path_d = "M 405 220 C"
        + getRandomStringNumber(250, 290) // 270
        + getRandomStringNumber(275, 315) // 265
        + getRandomStringNumber(145, 185) // 165
        + getRandomStringNumber(290, 330) // 310
        + getRandomStringNumber(105, 105) // endpoint 1 x // 105
        + getRandomStringNumber(250, 250) // endpoint 1 y // 250
        + "C"
        + getRandomStringNumber(40, 80) // 60
        + getRandomStringNumber(185, 225) // 205
        + getRandomStringNumber(5, 25) // 15
        + getRandomStringNumber(110, 150) // 130
        + getRandomStringNumber(90, 90)// endpoint 2 x // 90
        + getRandomStringNumber(55, 55) // endpoint 2 y // 55
        + "C"
        + getRandomStringNumber(145, 185) // 165
        + getRandomStringNumber(-15, -55) // -35
        + getRandomStringNumber(325, 365) // 345
        + getRandomStringNumber(5, 20) // 10
        + getRandomStringNumber(465, 465)// endpoint 3 x // 465
        + getRandomStringNumber(70, 70) // endpoint 3 y // 70
        + "C"
        + getRandomStringNumber(505, 545) // 525
        + getRandomStringNumber(80, 120) // 100
        + getRandomStringNumber(490, 530) // 510
        + getRandomStringNumber(155, 195) // 175
        + "405 220 Z";

    let bgpicture = btoa("url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='576' height='300' viewBox='0 0 576 380'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23AAAAAA' fill-opacity='0.1' fill-rule='nonzero'%3E%3Cpath d='" + path_d + " '/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")");

    elems[i].style.backgroundImage = atob(bgpicture);
}

