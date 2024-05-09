const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  // Scenario: Validation when values are missing
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return; // Exit early, division not possible
  }

  // Scenario: Providing anything that is not a number should crash the program
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    console.error("Invalid input. Expected numbers.");
    return; // Exit early, invalid input
  }

  // Scenario: An invalid division should log an error in the console
  if (divider === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero error.");
    return; // Exit early, division by zero
  }

  // Perform division
  const quotient = dividend / divider;

  // Scenario: Dividing numbers result in a decimal number
  // Check if quotient is an integer
  if (Number.isInteger(quotient)) {
    result.innerText = quotient;
  } else {
    result.innerText = Math.floor(quotient); // Display integer part only
  }
});