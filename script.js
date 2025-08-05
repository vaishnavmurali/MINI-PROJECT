let selectedRole = "";

function setRole(role) {
  selectedRole = role;
  document.getElementById("messageBox").innerHTML = `Selected Role: <b>${role}</b>`;
  document.getElementById("messageBox").style.color = "#333";
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const messageBox = document.getElementById("messageBox");

  if (!selectedRole) {
    messageBox.innerText = "Please select a role!";
    messageBox.style.color = "red";
    return;
  }


  if (
    (username === "teacher" || username === "admin" || username === "principal") &&
    password === "1234"
  ) {
    localStorage.setItem("username", username);
    localStorage.setItem("role", selectedRole);

    messageBox.innerHTML = `✅ Logged in as <b>${selectedRole}</b>`;
    messageBox.style.color = "green";

    setTimeout(() => {
      window.location.href = `dashboard-${selectedRole.toLowerCase()}.html`;
    }, 1000);
  } else {
    messageBox.innerText = "Invalid credentials.";
    messageBox.style.color = "red";
  }
});
