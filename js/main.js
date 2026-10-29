/* G-Rish Pharma website — minimal interactions */
(function () {
  'use strict';

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Contact page
  var form = document.getElementById('enquiry-form');
  if (!form) return;
  var error = document.getElementById('form-error');
  var TO = 'pooja.b@g-rishpharma.com';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f.name.value.trim(), email = f.email.value.trim(), message = f.message.value.trim();
    var ok = true;
    ['name', 'email', 'message'].forEach(function (k) { f[k].classList.remove('is-invalid'); });
    if (!name) { f.name.classList.add('is-invalid'); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { f.email.classList.add('is-invalid'); ok = false; }
    if (!message) { f.message.classList.add('is-invalid'); ok = false; }
    if (!ok) {
      error.textContent = 'Please complete your name, a valid email address and your message.';
      error.hidden = false;
      var bad = form.querySelector('.is-invalid'); if (bad) bad.focus();
      return;
    }
    error.hidden = true;
    var body = 'Name: ' + name + '\r\n' +
               'Company: ' + f.company.value.trim() + '\r\n' +
               'Email: ' + email + '\r\n' +
               'Country: ' + f.country.value.trim() + '\r\n' +
               'Area of interest: ' + f.interest.value + '\r\n\r\n' + message;
    window.location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent('Website enquiry: ' + f.interest.value) + '&body=' + encodeURIComponent(body);
  });
})();
