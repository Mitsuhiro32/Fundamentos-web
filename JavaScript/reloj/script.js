function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + new Date().getMinutes() * 60 + new Date().getHours() * 3600;
}

function getHoursHandAngle(s) {
    s %= 43200; // doce horas en segundos
    return ((360 * s / 43200) + 180) % 360;
}

function getMinutesHandAngle(s) {
    s %= 3600; // una hora en segundos
    return ((6 * s / 60) + 180) % 360;
}

function getSecondsHandAngle(s) {
    s %= 60; // un minuto en segundos
    return ((6 * s) + 180) % 360; 
}

const HOUR = document.getElementById("hour");
const MINUTES = document.getElementById("minutes");
const SECONDS = document.getElementById("seconds");

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    HOUR.style.transform = `rotate(${getHoursHandAngle(time)}deg)`;
    MINUTES.style.transform = `rotate(${getMinutesHandAngle(time)}deg)`;
    SECONDS.style.transform = `rotate(${getSecondsHandAngle(time)}deg)`;
}, 1000);
