let counter = 0;
let intervalId;

function greet() {
  counter++;
  console.log("hello ");

  if (counter >= 3) {
    clearInterval(intervalId);
  }
}
intervalId = setInterval(greet, 1000); // on every interval of 1sec it prints hello until we stop code execution or by clearInterval()
