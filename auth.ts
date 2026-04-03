const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");

const message = document.getElementById("message");

function showLogin(): void {
  if (!loginTab || !signupTab || !loginForm || !signupForm || !message) return;

  loginTab.classList.add("active");
  signupTab.classList.remove("active");

  loginForm.classList.add("active-form");
  signupForm.classList.remove("active-form");

  message.textContent = "";
}

function showSignup(): void {
  if (!loginTab || !signupTab || !loginForm || !signupForm || !message) return;

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