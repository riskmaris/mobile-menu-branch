let menuBar = document.querySelector('#menu-bar');
let xIcon = document.querySelector('#x-icon');
let popupList = document.querySelector('.popup-list');

xIcon.style.display = 'none'
popupList.style.display = 'none'

menuBar.addEventListener('click', () => {
    xIcon.style.display = 'block'
    popupList.style.display = 'block'
    menuBar.style.display = 'none'
});

 xIcon.addEventListener('click', () => {
    menuBar.style.display = 'block'
    popupList.style.display = 'none'
    xIcon.style.display = 'none'
});

popupList.forEach((popup) =>{
    popup.addEventListener('click', () => {
        xIcon.style.display = 'none'
        popupList.style.display = 'none'
    })
})




