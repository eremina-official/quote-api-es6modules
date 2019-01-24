
//cache DOM, declare variables
const $image = $('#image');
let uniqueUrl = 1;

//function declarations
function loadImage() {
  let source = 'https://source.unsplash.com/1920x1080?nature?sig=' + uniqueUrl; 
  $image.attr('src', source);
  uniqueUrl++;
  $image.on('load', function() {
    $(this).fadeIn('600', 'linear');
  });
}

function loadNextImage() {
  $image.attr('src', '');
  $image.css('display', 'none');
  loadImage();
}

//functions called on page load
loadImage();
    
export {loadNextImage};
