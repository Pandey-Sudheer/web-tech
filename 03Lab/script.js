document.getElementById("btnShow").addEventListener("click", function() {
  let result = "";

  var a = 10;
  let b = 20;
  const c = 30;
  result += "Variables: var=" + a + ", let=" + b + ", const=" + c + "<br>";


  for (let i = 0; i < 3; i++) {
    result += "For loop i=" + i + "<br>";
  }

  let x = 0;
  while (x < 3) {
    result += "While loop x=" + x + "<br>";
    x++;
  }

  let y = 0;
  do {
    result += "Do-While loop y=" + y + "<br>";
    y++;
  } while (y < 3);

  const arr = ["A", "B", "C"];
  for (const value of arr) {
    result += "For-of value=" + value + "<br>";
  }

  const obj = { name: "Sudheer", roll: "23BCP160" };
  for (const key in obj) {
    result += "For-in " + key + "=" + obj[key] + "<br>";
  }

  // Element Selection examples
  result += "<br>getElementById: " + document.getElementById("title").innerText + "<br>";
  result += "querySelector: " + document.querySelector(".myClass").innerText + "<br>";
  document.getElementById("output").innerHTML = result;
});
