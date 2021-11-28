const username = document.getElementById("username");
const password = document.getElementById("password");

function validate() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (username.value == "admin" && password.value == "12345") {
    gotoTodo();
    return true;
  } else {
    alert("Incorrect password or username");
    return false;
  }
}

function gotoTodo() {
  window.location.href = "my.html";
}
