let clockFrame = document.querySelector(".js-clockContainer"),
    clockTitle = clockFrame.querySelector(".js-clockTitle"),
    dateTitle = clockFrame.querySelector(".js-dateTitle");

let weekdayList = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let navItem = document.querySelector(".js-navLink");

function getTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDay();
    let month = now.getMonth();
    let date = now.getDate();
    let year = now.getFullYear();

    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    dateTitle.innerHTML = `${weekdayList[day]}, ${monthList[month]} ${date}, ${year}`;
}

function navSelect(event) {
    let currentValue = event.target;
    console.log(currentValue);
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    navItem.addEventListener("change", navSelect)
}

init();