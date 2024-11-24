document.addEventListener("DOMContentLoaded", () => {
    const gradients = [
"radial-gradient(circle at 50% 400%, rgb(7, 227, 244) 10%, rgb(24, 170, 181) 50%, rgb(8, 108, 118) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(255, 0, 255) 10%, rgb(204, 0, 204) 50%, rgb(153, 0, 153) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(255, 255, 0) 10%, rgb(204, 204, 0) 50%, rgb(153, 153, 0) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(255, 0, 0) 10%, rgb(204, 0, 0) 50%, rgb(153, 0, 0) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(50, 255, 50) 10%, rgb(40, 204, 40) 50%, rgb(30, 153, 30) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(65, 105, 225) 10%, rgb(50, 90, 180) 50%, rgb(30, 60, 130) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(255, 165, 0) 10%, rgb(204, 133, 0) 50%, rgb(153, 102, 0) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(64, 224, 208) 10%, rgb(48, 192, 192) 50%, rgb(32, 160, 160) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(128, 0, 128) 10%, rgb(102, 0, 102) 50%, rgb(76, 0, 76) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(255, 192, 203) 10%, rgb(204, 153, 179) 50%, rgb(153, 115, 135) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(211, 211, 211) 10%, rgb(169, 169, 169) 50%, rgb(128, 128, 128) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(135, 206, 235) 10%, rgb(102, 178, 255) 50%, rgb(70, 130, 180) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(178, 34, 34) 10%, rgb(139, 0, 0) 50%, rgb(105, 0, 0) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(152, 251, 152) 10%, rgb(102, 205, 170) 50%, rgb(77, 139, 77) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(255, 127, 80) 10%, rgb(204, 102, 68) 50%, rgb(153, 76, 51) 67%, black 100%)",
"radial-gradient(circle at 50% 400%, rgb(250, 128, 114) 10%, rgb(233, 99, 87) 50%, rgb(207, 77, 64) 67%, black 100%)"
    ];

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    const intro = document.getElementById('intro');
    document.intro.style.background = randomGradient;
});