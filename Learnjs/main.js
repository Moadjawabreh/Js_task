function task1() {
  var operator = prompt("please inter the operation");
  var num1 = parseFloat(prompt("please inter the first Num"));
  var num2 = parseFloat(prompt("please inter the first Num"));
  var result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Wrong choice";
  }

  console.log(num2 + " " + operator + " " + num2 + " = " + result);
}

function task2() {
  var result;
  var mark = parseFloat(prompt("Please inter Your Mark"));
  if (mark < 50) {
    result = "Fail";
  } else if (mark >= 50 && mark <= 59) {
    result = "D";
  } else if (mark >= 60 && mark <= 69) {
    result = "C";
  } else if (mark >= 70 && mark <= 79) {
    result = "B";
  }

  if (mark >= 80 && mark <= 89) {
    result = "A";
  } else if (mark >= 90 && mark <= 100) {
    result = "A+";
  }

  document.getElementById("showmark").innerText = result;
}

function task3() {
  var num1 = parseFloat(prompt("please inter the first Num"));
  const pi = Math.PI;
  var circumference = 2 * pi * num1;
  alert(`The circumference of the circle with radius ${circumference} `);
}

function task4() {
  var x = parseInt(prompt("please inter the first Num"));
  var y = parseInt(prompt("please inter the first Num"));
  var result;
  if (x > y) {
    result = "Hello world";
  } else {
    result = "Goodbye";
  }

  console.log(result);
  alert(result);
  document.getElementById("showresult").innerText = result;
}
