# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Project preview](assets/images/screenshot-newsletter-sign-up.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5
- Modern CSS (Flexbox, responsive units, custom properties)
- JavaScript vanilla (DOM manipulation, form validation)
- Mobile-first workflow
- Manual form validation (no HTML5 default validation)
- Accessibility practices (aria-live, focus, aria-invalid)

### What I learned

This project helped me improve both semantic structuring and accessibility.

- Validating form input with JavaScript and dynamically updating the UI:

if (newsletterEmail.value === '') {
  setError('Please fill in the field');
} else if (!newsletterEmail.value.includes('@') || !newsletterEmail.value.includes('.')) {
  setError('Valid email required');
} else {
  newsletterSection.style.display = 'none';
  newsletterSuccess.style.display = 'flex';
  userEmail.textContent = newsletterEmail.value;
}

- Managing error state using CSS classes instead of inline styling:

.input-error {
  border: 2px solid hsl(4, 100%, 67%);
  background-color: hsl(0, 100%, 98%);
}

- Dynamically inserting user email into the success message:

newsletterEmail.focus();
newsletterEmail.classList.add('input-error');

- Clearing the form and resetting state:

form.reset();
newsletterEmail.classList.remove('input-error');
errorMessage.textContent = '';


### Continued development

In future projects, I want to:

- Implement more advanced email validation using Regex (pattern or custom JS)
- Improve accessibility using aria-describedby, role="alert" and aria-live
- Try the same project using React or Vue to manage UI states
- Add transitions/animations for success state

## Author

- Website: [Schima](https://schima.it/)
- Frontend Mentor: https://www.frontendmentor.io/profile/edoardozampini
- GitHub: https://github.com/edoardozampini