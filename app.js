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

let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let buttonError = document.getElementById('button-error');

function validateName() {
  let name = document.getElementById('your-name').value;
  name.style.border = '1px solid red';

  if(name.length === 0) {
    nameError.innerHTML = 'name is required';
    return false;
  }
  if(!name.match(/^[a-za-z]*\s{1}[a-za-z]*$/)){
    nameError.innerHTML = 'write full name';
    return false;
  }
  nameError.innerHTML = '<i class="bi bi-hand-thumbs-up"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('your-email').value;
  email.style.border = '1px solid red';
  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if(!email.match(/^[a-za-z]\._\-[0-12]*[@][a-za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email Invalid';
    return false;
  }
  emailError.innerHTML = '<i class="bi bi-hand-thumbs-up"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById('your-message').value;
  let required = 500;
  let left = required - message.length;
  message.style.border = '1px solid red';
  

  if(left > 0){
    messageError.innerHTML = left + 'more characters required';
    return false;
  }

  messageError.innerHTML = '<i class="bi bi-hand-thumbs-up"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()){
    buttonError.style.display = 'block';
    buttonError.innerHTML = 'please fix error';
    setTimeout(function(){buttonError.style.display = 'none'}, 3000);
    return false;
  }
}
