function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    // Här kan du lägga till riktig login-logik eller localStorage
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    alert("Fyll i både användarnamn och lösenord!");
  }
}

function createAccount() {
  alert("Kontoskapande kan läggas till här (eller kopplas till databas)");
}
