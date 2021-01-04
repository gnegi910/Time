setInterval(() => {
a = new Date();
let date = a.toLocaleDateString();
let Time = a.toLocaleTimeString();
document.getElementById('javascript').innerHTML= Time + " on " + date;
}, 1000);
