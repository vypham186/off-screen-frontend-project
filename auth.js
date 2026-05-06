var loginTab = document.getElementById("loginTab");
var signupTab = document.getElementById("signupTab");
var loginForm = document.getElementById("loginForm");
var signupForm = document.getElementById("signupForm");
var goSignup = document.getElementById("goSignup");
var goLogin = document.getElementById("goLogin");
var message = document.getElementById("message");
function showLogin() {
    if (!loginTab || !signupTab || !loginForm || !signupForm || !message)
        return;
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active-form");
    signupForm.classList.remove("active-form");
    message.textContent = "";
}
function showSignup() {
    if (!loginTab || !signupTab || !loginForm || !signupForm || !message)
        return;
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active-form");
    loginForm.classList.remove("active-form");
    message.textContent = "";
}
if (loginTab) {
    loginTab.addEventListener("click", showLogin);
}
if (signupTab) {
    signupTab.addEventListener("click", showSignup);
}
if (goSignup) {
    goSignup.addEventListener("click", showSignup);
}
if (goLogin) {
    goLogin.addEventListener("click", showLogin);
}
if (loginForm && message) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        message.textContent = "Logged in successfully!";
    });
}
if (signupForm && message) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        message.textContent = "Account created successfully!";
    });
}
