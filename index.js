const newsletterSection = document.getElementById('newsletter-section');
const newsletterSuccess = document.getElementById('newsletter-success');
const newsletterEmail = document.getElementById('newsletter-email');
const errorMessage = document.getElementById('error-message');
const userEmail = document.getElementById('user-email');
const form = document.getElementById('form');
const dismissButton = document.getElementById('dismiss-button');

const setError = (message) => {
  errorMessage.textContent = message;
  newsletterEmail.focus();
  newsletterEmail.classList.add('input-error');
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = newsletterEmail.value.trim();

  if (value === '') {
    setError('Please fill in the field');
  } else if (!value.includes('@') || !value.includes('.')) {
    setError('Valid email required');
  } else {
    newsletterSection.style.display = 'none';
    newsletterSuccess.style.display = 'flex';
    userEmail.textContent = value;
  }
});

dismissButton.addEventListener('click', () => {
  newsletterSuccess.style.display = 'none';
  newsletterSection.style.display = 'flex';
  form.reset();
  errorMessage.textContent = '';
  newsletterEmail.classList.remove('input-error');
});

newsletterEmail.addEventListener('input', () => {
  errorMessage.textContent = '';
  newsletterEmail.classList.remove('input-error');
});