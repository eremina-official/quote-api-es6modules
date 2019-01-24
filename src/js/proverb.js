
import {loadNextImage} from './background.js';

//cache DOM, declare variables
const $showQuotes = $('#show-quotes');
const $showProverbs = $('#show-proverbs');
const $proverb = $('#proverb');
const $author = $('#author');
const $nextQuote = $('#next-quote');
const $nextProverb = $('#next');

const proverbArray = [
  'If you can\'t beat \'em, join \'em',
  'Don\'t count your chickens before they hatch',
  'Actions speak louder than words',
  'The leopard does not change his spots',
  'A journey of a thousand miles begins with a single step',
  'Don\'t bite the hand that feeds you',
  'Don\'t put off until tomorrow what you can do today',
  'No man is an island',
  'The early bird gets the worm',
  'The enemy of my enemy is my friend',
  'A poor workman always blames his tools',
  'A person is known by the company he keeps',
  'Don\'t burn your bridges behind you'
];

const lastProverbIndex = proverbArray.length - 1;

//bind events
$showProverbs.on('click', goToProverb);
$nextProverb.on('click', showNextProverb);

//function declarations
function showProverb() {
  $proverb.html(proverbArray[0]);
}

function showNextProverb() {
  let currentProverb = $proverb.html();
  let currentIndex = proverbArray.indexOf(currentProverb);
  let indexToShow = (currentIndex === lastProverbIndex) ? 0 : currentIndex + 1;
  $proverb.html(proverbArray[indexToShow]);
  loadNextImage();
}

function goToProverb() {
  $proverb.html('');
  $author.html('');
  $proverb.addClass('largefont');
  $showQuotes.removeClass('active');
  $(this).addClass('active');
  $nextQuote.hide();
  $nextProverb.show();
  showProverb();
  loadNextImage();
}

//functions called on page load
showProverb();
