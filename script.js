const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const accountLink = document.querySelector('#account-link');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

accountLink.addEventListener('click', (event) => {
  event.preventDefault();  // Prevent the default behavior of the anchor tag
  wrapper.classList.add('active-popup');
});

document.addEventListener('click', (event) => {
  if (!wrapper.contains(event.target) && !btnPopup.contains(event.target) && !accountLink.contains(event.target)) {
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-popup');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('open');
  });
});




