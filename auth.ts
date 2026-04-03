const loginTab = document.getElementById("loginTab") as HTMLButtonElement | null;
const signupTab = document.getElementById("signupTab") as HTMLButtonElement | null;

const loginForm = document.getElementById("loginForm") as HTMLFormElement | null;
const signupForm = document.getElementById("signupForm") as HTMLFormElement | null;

const goSignup = document.getElementById("goSignup") as HTMLSpanElement | null;
const goLogin = document.getElementById("goLogin") as HTMLSpanElement | null;

const message = document.getElementById("message") as HTMLDivElement | null;

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
  loginForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    message.textContent = "Logged in successfully!";
  });
}

if (signupForm && message) {
  signupForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    message.textContent = "Account created successfully!";
  });
}