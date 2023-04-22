const menuBar = document.querySelector('#menu-bar');
const xIcon = document.querySelector('#x-icon');
const popupList = document.querySelector('.popup-list');

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

const cards = [
  {
    card: 1,
    image: './images/Snapshoot Portfolio (2).png',
    heading: 'Tonic',
    paragraph:
      'A daily selection of privately personalised reads; no accounts or sign-ups required',
    application: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    languages: ['html', 'css', 'javascript'],
    button: 'See Project',
  },
  {
    card: 2,
    image: './images/Snapshoot Portfolio (2).png',
    heading: 'Multi-Post Stories',
    paragraph:
      'Experiemental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends',
    application: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
    languages: ['html', 'ruby on rails', 'css', 'javascript'],
    button: 'See Project',
  },
  {
    card: 3,
    image: './images/Snapshoot Portfolio (1).png',
    heading: 'Facebook 360',
    paragraph:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR",
    application: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
    languages: ['html', 'ruby on rails', 'css', 'javascript'],
    button: 'See Project',
  },
  {
    card: 4,
    image: './images/Snapshoot Portfolio (3).png',
    heading: 'Uber Navigation',
    paragraph:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    application: 'Uber',
    stack: 'Lead Developer',
    year: '2015',
    languages: ['html', 'ruby on rails', 'css', 'javascript'],
    button: 'See Project',
  },
];

const detailsForPopUpDiv = document.createElement('div');
const popClose = document.getElementById('close-icon');

const popUpDiv = (element) => {
  detailsForPopUpDiv.innerHTML = `
        <div class="pop-up-div">
            
            <i class="bi bi-x-lg" id="close-icon" onclick="closePopup()"></i>
            
            <div class="pop-up-div-container">
            <div class="pop-up-div-container-details-heading">
            <h1>${element.heading}</h1>
            </div>
            <div class="pop-up-div-container-details-details">
                    <h4><h3>${element.application}</h3> • ${element.stack} • ${element.year}</h4>
                </div>
            <div class="pop-up-div-container-img">
                <img src="${element.image}" alt="picture card">
            </div>
            <div class="pop-up-div-container-details">
                <p>
                    ${element.paragraph}
                </p>
          <div class='btn-details'>
              <ul class="languages">
                  <li>HTML</li>
                  <li>CSS</li>
                   <li>JavaScript</li>
              </ul>
              <div class='submit-btn'>
                <button class="beg-btn"><a href="#">See Live</a>
                <i class="bi bi-box-arrow-up-right"></i>
                </button>
                <button class="beg-btn"><a href="#">See Source</a>
                <i class="bi bi-github"></i>
                </button>
              </div>
         </div>
                
            </div>
        </div>
  `;

  const section = document.querySelector(`.${element.class}`);
  section.appendChild(detailsForPopUpDiv);
};
function closePopup() {
  detailsForPopUpDiv.style.display = 'none';
}

cards.forEach((element) => {
  const section = document.querySelector('#Portfolio');
  const div = document.createElement('div');

  div.innerHTML = `
          <div class= "first-card ${element.class}">

            <div class="img-container">
              <img class="card-img" src="${element.image}" alt="picture card">
            </div>
            <div class="details-container">
                <div class="heading">
                  <h1 id="card-h1">${element.heading}</h1>
                </div>

                <div class="details">
                <h3>${element.application}</h3><h4> • ${element.stack} • ${element.year}</h4>
                </div>

                <p>
                  ${element.paragraph}
                </p>
          
                <ul class="languages">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <button onclick='popupOpen()' class="beg-btn"><a href="#">
                  ${element.button}</a></button>
            </div>
          </div>          
`;
  section.appendChild(div);

  div.addEventListener('click', () => {
    popUpDiv(element);
  });
});

function popupOpen() {
  detailsForPopUpDiv.style.display = 'block';
}

document.querySelector('.beg-btn').addEventListener('click', popupOpen);

popClose.addEventListener('click', closePopup);
