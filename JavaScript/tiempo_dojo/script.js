function changeCity() {
    alert('Loading weather report...');
}

function changeTemp(degrees) {
    console.log('Changing temperature to ' + degrees.value);
    
}

function changeTemp(degrees) {
    let highTempElement = document.querySelectorAll('.highTemp');
    let lowTempElement = document.querySelectorAll('.lowTemp');

    for (let i = 0; i < highTempElement.length; i++) {
        if (degrees.value === 'F') {
            highTempElement[i].textContent = Math.round((parseFloat(highTempElement[i].textContent) * 9 / 5) + 32) + "°";
            lowTempElement[i].textContent = Math.round((parseFloat(lowTempElement[i].textContent) * 9 / 5) + 32) + "°";
        } else if (degrees.value === 'C') {
            highTempElement[i].textContent = Math.round((parseFloat(highTempElement[i].textContent) - 32) * 5 / 9) + "°";
            lowTempElement[i].textContent = Math.round((parseFloat(lowTempElement[i].textContent) - 32) * 5 / 9) + "°";
        }
    }
}

function removeCookie() {
    let cookie = document.querySelector('.cookies');
    cookie.remove();
}