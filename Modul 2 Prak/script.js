// Append the clicked button's value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  // Clear the display
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Calculate the result of the expression in the display
  function calculateResult() {
    try {
      let result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }  