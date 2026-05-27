// contact.js — FAQ and form handled via main.js inline functions
// Additional file upload label update
const fileInput = document.getElementById('fileInput');
const fileLabel = document.querySelector('.file-label');

if (fileInput && fileLabel) {
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileLabel.textContent = '✅ ' + fileInput.files[0].name;
    } else {
      fileLabel.textContent = '📎 Click to attach STL, OBJ, STEP, image or PDF';
    }
  });
}
