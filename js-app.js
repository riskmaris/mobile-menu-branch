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

const cards = [{
  card: 1,
  image: './images/desktop/cart1.png',
  heading: 'Tonic',
  paragraph: 'A daily selection of privately personalised reads; no accounts or sign-ups required',
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
  paragraph: 'Experiemental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends',
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
  paragraph: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR",
  application: 'FACEBOOK',
  stack: 'Full Stack Dev',
  year: '2015',
  languages: ['html', 'ruby on rails', 'css', 'javascript'],
  button: 'See Project',
},
{
  card: 4,
  image: './images/Snapshoot Portfolio (3).png',
  title: 'Uber Navigation',
  paragraph: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  canopy: 'Uber',
  stack: 'Lead Developer',
  year: '2015',
  languages: ['html', 'ruby on rails', 'css', 'javascript'],
  button: 'See Project',
}];
