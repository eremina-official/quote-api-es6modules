import '../css/style-background.css';

//cache DOM, declare variables
const $image = $('#image');
let uniqueUrl = 1;

//bind events
$image.on('load', fadeInImage);

//function declarations
function loadImage() {
  let source = `https://source.unsplash.com/1920x1080?nature?sig=${uniqueUrl}`; 
  $image.attr('src', source);
  uniqueUrl++;
}

function fadeInImage() {
  $(this).fadeIn('600', 'linear');
}

function loadNextImage() {
  $image.attr('src', '');
  $image.css('display', 'none');
  loadImage();
}

//functions called on page load
loadImage();
    
export {loadNextImage};
