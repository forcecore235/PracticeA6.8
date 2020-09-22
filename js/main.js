let progressBar = document.querySelector(".progress-bar");
let btn = document.querySelectorAll(".btn");

let progressValue = progressBar.style.width.slice(0, -1);

btn.forEach((element) => {
    element.addEventListener("click", function() {
        progressValue = Number(progressValue) + Number(element.value);
        console.log(progressValue);
        progressBar.style.width = [progressValue + "%"];
    });
})
