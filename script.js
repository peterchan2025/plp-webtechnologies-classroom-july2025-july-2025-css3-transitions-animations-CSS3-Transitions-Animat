/* 
   Part 2: Functions, Scope, Return
 */

// Global variable
let globalMessage = "Hello from global scope!";

// Function with parameter + return
function greetUser(name) {
  let localMessage = "Hello " + name; // local variable
  console.log(localMessage);
  return localMessage;
}

// Function to calculate area
function calculateArea(width, height) {
  return width * height;
}

// Example usage
console.log(greetUser("Alice"));
console.log("Area of 5x10 rectangle:", calculateArea(5, 10));


/* 
   Part 3: Trigger CSS Animations
 */

const btn = document.getElementById("animateBtn");
const box = document.getElementById("box");

function animateBox() {
  box.classList.remove("slide-in"); // reset
  void box.offsetWidth; // restart trick
  box.classList.add("slide-in");
}

btn.addEventListener("click", animateBox);


/* 
    Part 4: Form Validation
   */

function validateForm(event) {
  event.preventDefault(); // prevent form submission

  let isValid = true;

  // Inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("successMessage");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  // Validate Name
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success
  if (isValid) {
    successMessage.textContent = "Form submitted successfully 🎉";
    successMessage.classList.add("fade-in");
  }
}

// Attach form validation
document.getElementById("signupForm").addEventListener("submit", validateForm);
