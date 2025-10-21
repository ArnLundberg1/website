// När sidan laddas, kolla om användaren redan är inloggad
window.onload = () => {
  if (localStorage.getItem("loggedInUser")) {
    showMainPage();
  }
};

const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const message = document.getElementById("message");

loginBtn.onclick = () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = localStorage.getItem(username);

  if (!storedUser) {
    message.textContent = "Kontot finns inte.";
    return;
  }

  const user = JSON.parse(storedUser);
  if (user.password === password) {
    localStorage.setItem("loggedInUser", username);
    showMainPage();
  } else {
    message.textContent = "Fel lösenord.";
  }
};

registerBtn.onclick = () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    message.textContent = "Fyll i båda fälten.";
    return;
  }

  if (localStorage.getItem(username)) {
    message.textContent = "Användarnamnet är redan taget.";
    return;
  }

  const user = { username, password };
  localStorage.setItem(username, JSON.stringify(user));
  message.textContent = "Konto skapat! Du kan nu logga in.";
};

// Visa huvudsidan
function showMainPage() {
  document.getElementById("auth-container").classList.add("hidden");
  document.getElementById("main-page").classList.remove("hidden");
}
