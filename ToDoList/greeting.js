const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    printUserName(currentValue);
    saveName(currentValue);
}

function askUserName() {
    form.addEventListener("submit", handleSubmit);
}

function saveName(userName) {
    localStorage.setItem(USER_LS, userName);
}

function printUserName(userName) {
    greeting.innerText = `Hello~ ${userName}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    askUserName();
    if(currentUser === null) {
        console.log("UserName is Null");
    }
    else {
        console.log("printUserName go");
        printUserName(currentUser);
    }

}

function init() {
    loadName();
}

init();