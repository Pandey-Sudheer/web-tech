const outputDiv = document.getElementById("output");

document.getElementById("varBtn").addEventListener("click", function() {
  var x = 10;      // var example
  let y = 20;      // let example
  const PI = 3.14; // const example

  outputDiv.innerHTML = 
    "var x = " + x + "<br>" +
    "let y = " + y + "<br>" +
    "const PI = " + PI;
});

// --- Loops Example ---
document.getElementById("loopBtn").addEventListener("click", function() {
  let result = "<b>For Loop:</b> ";
  for (let i = 0; i < 5; i++) {
    result += i + " ";
  }

  result += "<br><b>While Loop:</b> ";
  let j = 0;
  while (j < 3) {
    result += j + " ";
    j++;
  }

  result += "<br><b>Do-While Loop:</b> ";
  let k = 0;
  do {
    result += k + " ";
    k++;
  } while (k < 2);

  result += "<br><b>For-of Loop (array values):</b> ";
  let fruits = ["Apple", "Banana", "Mango"];
  for (const fruit of fruits) {
    result += fruit + " ";
  }

  result += "<br><b>For-in Loop (object keys):</b> ";
  let student = {name: "Sudheer", roll: "23BCP160"};
  for (const key in student) {
    result += key + "=" + student[key] + " ";
  }

  outputDiv.innerHTML = result;
});

// --- Event Handling Example ---
document.getElementById("eventBtn").addEventListener("click", function() {
  outputDiv.innerHTML = "🎉 Button was clicked! This is an event handler in action.";
});
