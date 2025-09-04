document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (phone.length < 10) {
    alert("Phone number must be at least 10 digits!");
    return;
  }

  alert("Registration Successful!\nWelcome " + fullname);
  document.getElementById("regForm").reset();
<br/>
  console.log();
});
