// contact.js — FAQ and form handled via main.js inline functions
// Additional file upload label update
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');
  const successDiv = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Stop the page from reloading immediately

      // Change button text to show it is processing the upload
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = "...";
      submitBtn.disabled = true;

      // Pack up all inputs and file attachments
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Hide the form mesh layout and reveal your translated success block
          form.style.display = 'none';
          if (successDiv) {
            successDiv.style.display = 'block';
            // Smoothly scroll up to the success card
            successDiv.scrollIntoView({ behavior: 'smooth' });
          }
          form.reset();
        } else {
          alert("Submission failed. Please check your network connection and try again.");
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
        }
      } catch (error) {
        alert("An unexpected error occurred. Please verify your internet connection.");
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }
});
