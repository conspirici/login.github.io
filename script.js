const passwordInput = document.getElementById("password-input");
const toggleBtn = document.getElementById("toggle-btn");
const loginBox = document.getElementById("login-box");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
  
  if (loginBox.classList.contains("flamingo")) {
    loginBox.classList.remove("flamingo");
    loginBox.classList.add("black");
    body.style.backgroundColor = "#000";
  } else {
    loginBox.classList.remove("black");
    loginBox.classList.add("flamingo");
    body.style.backgroundColor = "#f5a2a1";
  }
  
  if (passwordInput.classList.contains("black")) {
    passwordInput.classList.remove("black");
    passwordInput.classList.add("white");
  } else {
    passwordInput.classList.remove("white");
    passwordInput.classList.add("black");
  }
  
  if (toggleBtn.classList.contains("white")) {
    toggleBtn.classList.remove("white");
    toggleBtn.classList.add("black");
  } else {
    toggleBtn.classList.remove("black");
    toggleBtn.classList.add("white");
  }
});
