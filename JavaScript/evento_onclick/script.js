function changeText(buttonText) {
    let text = buttonText.textContent;
    if (text == "Login") {
        buttonText.textContent = "Logout";
    } else {
        buttonText.textContent = "Login"
    }
}

function liked() {
    alert("Ninja was liked");
}

function removeBtn(btn) {
    btn.remove();
}