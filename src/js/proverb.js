import { loadNextImage } from './background.js';

//cache DOM, declare variables
const showQuotesButton = document.querySelector('.js-show-quotes');
const showProverbsButton = document.querySelector('.js-show-proverbs');
const proverbQuoteContent = document.querySelector('.js-proverb-quote');
const author = document.querySelector('.js-author');
const nextQuoteButton = document.querySelector('.js-next-quote');
const nextProverbButton = document.querySelector('.js-next-proverb');

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
showProverbsButton.addEventListener('click', goToProverb);
nextProverbButton.addEventListener('click', showNextProverb);

//function declarations
function showProverb() {
  proverbQuoteContent.textContent = proverbArray[0];
}

function showNextProverb() {
  const currentProverb = proverbQuoteContent.textContent;
  const currentIndex = proverbArray.indexOf(currentProverb);
  const indexToShow = (currentIndex === lastProverbIndex) ? 0 : currentIndex + 1;
  proverbQuoteContent.textContent = proverbArray[indexToShow];
  loadNextImage();
}

function goToProverb() {
  proverbQuoteContent.textContent = '';
  author.textContent = '';
  proverbQuoteContent.classList.add('largefont');
  showQuotesButton.classList.remove('active');
  showProverbsButton.classList.add('active');
  nextQuote.classList.add('is-not-active');
  nextProverb.classList.remove('is-not-active');
  showProverb();
  loadNextImage();
}

//functions called on page load
showProverb();

export { showQuotesButton, showProverbsButton, proverbQuoteContent, author, nextQuoteButton, nextProverbButton };
