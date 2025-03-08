// Get references to the input box and all buttons
const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    // Handle AC (All Clear) button
    if (button.classList.contains("ac")) {
      inputBox.value = "";
    }
    // Handle DEL (Delete) button
    else if (button.classList.contains("del")) {
      inputBox.value = inputBox.value.slice(0, -1);
    }
    // Handle = (Equal) button
    else if (button.classList.contains("equalBtn")) {
      try {
        // Evaluate the expression in the input box
        inputBox.value = eval(inputBox.value);
      } catch (error) {
        // Handle invalid expressions
        inputBox.value = "Error";
      }
    }
    // Handle other buttons (numbers, operators, etc.)
    else {
      inputBox.value += buttonText;
    }
  });
});
