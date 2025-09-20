// Default login credentials
const defaultUsername = "giovannithysmichel";
const defaultPassword = "Giomichel420!";

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === defaultUsername && password === defaultPassword) {
        // Redirect to homepage
        window.location.href = "index.html";
      } else {
        errorMessage.textContent = "Invalid username or password";
      }
    });
  }
});
