let greetingForm = document.querySelector(".js-greetingForm"),
    greetingInput = greetingForm.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

let USER_LS = "currentuser";
let HIDDEN_CN = "hidden";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
    greetingForm.classList.add(HIDDEN_CN);
    greeting.classList.remove(HIDDEN_CN);
    greeting.innerHTML = `Hello, ${text}! I'm always greeting for you.`;
}

function handleSubmit(event) {
    event.preventDefault();
    let currentValue = greetingInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askUsername() {
    greeting.classList.add(HIDDEN_CN);
    greetingForm.classList.remove(HIDDEN_CN);
    greetingForm.addEventListener("submit", handleSubmit);
}

function loadUsername() {
    let currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askUsername();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadUsername()
}

init();