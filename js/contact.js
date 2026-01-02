document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);

  if (params.get('notif') === 'success') {
    document.getElementById('popup').style.display = 'flex';
  }

  // Add event listener to contact form
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting to server
    document.getElementById('popup').style.display = 'flex'; // Show popup
    contactForm.reset(); // Reset form fields
  });
});

function closePopup(){
  document.getElementById('popup').style.display = 'none';
  window.history.replaceState({}, document.title, window.location.pathname);
}
