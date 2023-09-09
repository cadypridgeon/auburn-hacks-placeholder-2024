
function countDown(){
    let countDownDate = new Date("Feb 3, 2024 00:00:00").getTime();
    let present = new Date().getTime();
    let distance = countDownDate - present;
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((distance % (1000*60*60*24*30)) / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((distance % (1000*60)) / 1000);


    let countDownDisplay = document.querySelector("#countdown");
    countDownDisplay.innerHTML = `<p>${months}m ${days}d ${hours}h ${minutes}m ${seconds}s</p>`;
    

    countDown.className = "countdown";

    if (distance < 0) {
        clearInterval(countDown);
        countDown.innerHTML = "HERE WE GO!";
    }
}

countDown();
let x = setInterval(countDown, 1000);