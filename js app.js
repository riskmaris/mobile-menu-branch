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