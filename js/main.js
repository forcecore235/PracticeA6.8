let button1 = document.querySelector(".buttonChange1");
let button3 = document.querySelector(".buttonChange3");
let button7 = document.querySelector(".buttonChange7");
let progressBar = document.querySelector(".progress-bar");

button1.addEventListener("click", function() {
    let progressValue = progressBar.style.width.slice(0, -1);
    let newValue = Number(progressValue) + 1;
    console.log(newValue);
    progressBar.style.width = [newValue + "%"];
})

button3.addEventListener("click", function() {
    let progressValue = progressBar.style.width.slice(0, -1);
    let newValue = Number(progressValue) + 3;
    console.log(newValue);
    progressBar.style.width = [newValue + "%"];
})

button7.addEventListener("click", function() {
    let progressValue = progressBar.style.width.slice(0, -1);
    let newValue = Number(progressValue) + 7;
    console.log(newValue);
    progressBar.style.width = [newValue + "%"];
})