var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var table = document.getElementById("todo");
    var response = JSON.parse(this.responseText);
    console.log(response.length);
    var output = "";
    for (var i = 0; i < response.length; i++) {
      if (response[i].completed == true) {
        output += `
        <tr>
        <td>${response[i].id}</td>
        <td class="test">${response[i].title}</td>
        <td><input type="checkbox" name="check" onclick="return checkCount()"></td>

        </tr>`;
      } else {
        output += `
          <tr><td>${response[i].id}</td>
          <td class="completed">${response[i].title}</td>
          <td><input type="checkbox"disabled checked></td>
            `;
      }
    }
    table.innerHTML = output;
  }
};

function checkCount() {
  var inputElems = document.getElementsByName("check");
  var test = document.getElementsByClassName("test");
  var i = 0;
  var count;
  for (count = 0; count < inputElems.length; count++) {
    if (inputElems[count].checked == true) {
      i = i + 1;
      test[i - 1].classList.add("completed");
    }
  }
  console.log(i);
  if (i >= 5) {
    alert(`You have completed ${i} tasks`);
  }
}

function todoReload() {
  location.reload();
}

xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();
