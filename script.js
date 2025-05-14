
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  const hours = now.getHours();
  const greeting = hours < 12 ? "Good morning!" :
                   hours < 18 ? "Good afternoon!" : "Good evening!";
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = greeting;
  }
});
