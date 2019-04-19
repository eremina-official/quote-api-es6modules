import { loadNextImage } from './background.js';

//cache DOM, declare variables
const showQuotesButton = document.querySelector('.js-show-quotes');
const showProverbsButton = document.querySelector('.js-show-proverbs');
const proverbWrapper = document.querySelector('.proverb-container__proverb');
const quoteWrapper = document.querySelector('.proverb-container__quote');
const proverbContent = document.querySelector('.js-proverb-content');
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

let currentProverbIndex = 0;
const lastProverbIndex = proverbArray.length - 1;

//bind events
showProverbsButton.addEventListener('click', goToProverb);
nextProverbButton.addEventListener('click', showNextProverb);

//function declarations
function showProverb() {
  proverbContent.textContent = proverbArray[0];
}

function showNextProverb() {
  currentProverbIndex = (currentProverbIndex === lastProverbIndex) ? 0 : currentProverbIndex + 1;
  proverbContent.textContent = proverbArray[currentProverbIndex];
  loadNextImage();
}

function goToProverb() {
  if (proverbWrapper.classList.contains('is-not-active')) {
    quoteWrapper.classList.add('is-not-active');
    proverbWrapper.classList.remove('is-not-active');
    showQuotesButton.classList.remove('active');
    showProverbsButton.classList.add('active');
    showNextProverb();
  }
}

export { showProverb, showQuotesButton, showProverbsButton };
