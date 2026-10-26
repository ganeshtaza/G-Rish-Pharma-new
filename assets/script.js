const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// The contact form opens the visitor's email app. Replace the placeholder address
// in contact.html and this file before publishing the website.
const enquiryForm = document.querySelector('#enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;

    const recipient = 'YOUR_EMAIL@example.com'; // TODO: replace with company email
    const data = new FormData(enquiryForm);
    const subject = `Website enquiry from ${data.get('name')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Company: ${data.get('company') || 'Not provided'}`,
      `Email: ${data.get('email')}`,
      `Country: ${data.get('country') || 'Not provided'}`,
      `Enquiry type: ${data.get('enquiryType')}`,
      '',
      'Message:',
      data.get('message')
    ].join('\n');

    if (recipient === 'YOUR_EMAIL@example.com') {
      const status = document.querySelector('#form-status');
      if (status) {
        status.textContent = 'The form is ready, but the company email address has not been configured yet. Please replace YOUR_EMAIL@example.com in assets/script.js and the placeholder email in contact.html.';
        status.style.display = 'block';
      }
      return;
    }

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
