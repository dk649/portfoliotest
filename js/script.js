function runTypingEffect() {
  const text = "I am David Kelly.";

  const typingElement = document.getElementById("typing-text");

  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, timingDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, timingDelay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
