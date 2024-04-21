// var countPartI = 3; // Part I
function like(element) {
    /* countPartI++;
    let likes = document.querySelector(".likes p");
    likes.innerHTML = countPartI + " like(s)"; */

    let likes = element.previousElementSibling;
    let count = parseInt(likes.innerHTML);
    count++;
    likes.innerHTML = count + " like(s)";
}