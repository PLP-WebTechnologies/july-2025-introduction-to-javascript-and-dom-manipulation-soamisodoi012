// 🚀 JavaScript Fundamentals Assignment
// ====================================

// 🎯 Part 1: Variables, Conditionals, Operators
let userAge = 27;  // variable declaration
let userName = "Dejenie Mitiku";  // string variable

// Conditional logic
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// DOM output (instead of console)
document.getElementById("results").innerHTML += `<p>✅ ${userName} is ${userAge} years old.</p>`;

// ❤️ Part 2: Functions (Reusability)
// Function 1: calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: format string
function greetUser(name) {
  return `Hello, ${name}! Welcome back.`;
}

// Using the functions
let total = calculateTotal(10, 3);
document.getElementById("results").innerHTML += `<p>🛒 Total price: $${total}</p>`;
document.getElementById("results").innerHTML += `<p>👋 ${greetUser(userName)}</p>`;

// 🔁 Part 3: Loops (Repetition)
// Example 1: for loop
for (let i = 1; i <= 5; i++) {
  console.log("Loop iteration " + i);
  document.getElementById("results").innerHTML += `<p>Loop #${i}</p>`;
}

// Example 2: while loop
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  document.getElementById("results").innerHTML += `<p>⏳ Countdown: ${countdown}</p>`;
  countdown--;
}

// 🌐 Part 4: DOM Manipulation
const startBtn = document.getElementById("start-btn");

// Event listener
startBtn.addEventListener("click", () => {
  // 1. Change text content
  document.getElementById("welcome-text").textContent = "🎉 You clicked the button!";

  // 2. Toggle a CSS class
  startBtn.classList.toggle("active");

  // 3. Create a new element dynamically
  let newEl = document.createElement("p");
  newEl.textContent = "✨ New content added dynamically!";
  document.getElementById("results").appendChild(newEl);
});
