/* import '../css/style-background.css'; */

//cache DOM, declare variables
const image = document.querySelector('.js-image');
let uniqueUrl = 1;

//bind events
image.addEventListener('load', fadeInImage);

//function declarations
function loadImage() {
  const source = `https://source.unsplash.com/1920x1080?nature?sig=${uniqueUrl}`; 
  image.setAttribute('src', source);
  uniqueUrl++;
}

function fadeInImage() {
  image.classList.add('image-is-visible');
}

function loadNextImage() {
  image.classList.remove('image-is-visible');
  image.setAttribute('src', '');
  loadImage();
}

//functions called on page load
loadImage();
    
export { loadNextImage };
