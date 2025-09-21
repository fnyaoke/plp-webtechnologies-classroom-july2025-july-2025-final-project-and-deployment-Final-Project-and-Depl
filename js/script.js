// Script for interactive features

// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});

// Contact Form Validation + Feedback
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        showMessage("Please fill in all fields.", "error");
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        showMessage("Please enter a valid email address.", "error");
        return;
      }

      showMessage("✅ Your message has been sent successfully!", "success");
      form.reset();
    });

    function showMessage(text, type) {
      formMessage.textContent = text;
      formMessage.className = "message " + type;
      formMessage.style.display = "block";
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 4000);
    }