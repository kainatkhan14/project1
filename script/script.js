// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  // Function to provide visual feedback
  function applyFeedback(elementId, isValid) {
    const element = document.getElementById(elementId);
    if (isValid) {
      element.classList.remove("error");
      element.classList.add("success");
    } else {
      element.classList.remove("success");
      element.classList.add("error");
    }
  }
  
  // DOM Loaded Event
  document.addEventListener("DOMContentLoaded", function() {
    // Grabbing the form and input elements
    const form = document.getElementById("signup-form");
    const emailElem = document.getElementById("email");
    const nameElem = document.getElementById("name");
    const interestElem = document.getElementById("interest");
  
    // Adding Event Listener for character count in Name field
    nameElem.addEventListener("input", function() {
      const nameLength = this.value.length;
      if (nameLength >= 2 && nameLength <= 100) {
        console.log(`Character count is okay: ${nameLength}`);
      } else {
        console.log(`Invalid character count: ${nameLength}`);
      }
    });
  
    // Form Validation and Submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default submission
  
      const email = emailElem.value;
      const name = nameElem.value;
      const interest = interestElem.value;
  
      let isValidForm = true;
  
      if (!isValidEmail(email)) {
        isValidForm = false;
        applyFeedback("email", false);
      } else {
        applyFeedback("email", true);
      }
  
      if (!name || name.length < 2 || name.length > 100) {
        isValidForm = false;
        applyFeedback("name", false);
      } else {
        applyFeedback("name", true);
      }
  
      if (!interest) {
        isValidForm = false;
        applyFeedback("interest", false);
      } else {
        applyFeedback("interest", true);
      }
  
      if (isValidForm) {
        alert("Thank you for signing up!");
        // Here you could also send the form data to a server
      } else {
        alert("Please correct the errors and try again.");
      }
    });
  });
  