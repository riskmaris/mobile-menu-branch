const menuBar = document.querySelector('#menu-bar');
const xIcon = document.querySelector('#x-icon');
const popupList = document.querySelector('.popup-list');
const popupListItems = document.querySelectorAll('.pop');

xIcon.style.display = 'none';
popupList.style.display = 'none';

menuBar.addEventListener('click', () => {
  xIcon.style.display = 'block';
  popupList.style.display = 'block';
  menuBar.style.display = 'none';
});

xIcon.addEventListener('click', () => {
  menuBar.style.display = 'block';
  popupList.style.display = 'none';
  xIcon.style.display = 'none';
});

popupListItems.forEach((item) => {
  item.addEventListener('click', () => {
    popupList.style.display = 'none';
    xIcon.style.display = 'none';
    menuBar.style.display = 'block';
  });
});

// ---------CONTACT VALIDATION---------

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const buttonError = document.getElementById('button-error');

function nameValidation() {
  const name = document.getElementById('name-input').value;
  if (name.length === 0) {
    nameError.innerHTML = 'name is required';
    return false;
  }
  if (!name.match(/^[a-za-z]*\s{1}[a-za-z]*$/)) {
    nameError.innerHTML = 'write full name';
    return false;
  }
  nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById('your-email').value;
  if (email.length === 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    emailError.innerHTML = 'Email is Invalid, it should be lowercase';
    return false;
  }
  emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}

function validateMessage() {
  const message = document.getElementById('your-message').value;
  const required = 30;
  const left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = `${left} more characters required`;
    return false;
  }

  messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}

function validateForm() {
  if (!nameValidation() || !validateEmail() || !validateMessage()) {
    buttonError.style.display = 'block';
    buttonError.innerHTML = 'please fix error';
    setTimeout(() => { buttonError.style.display = 'none'; }, 3000);
    return false;
  }
  return true;
}
buttonError.addEventListener('submit', validateForm);
