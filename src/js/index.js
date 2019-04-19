import './background.js';
import './proverb.js';
import './quote.js';
import '../css/stylesheet.css';
import '../css/style-proverb.css';
import { loadImage } from './background.js';
import { showProverb } from './proverb.js';

window.addEventListener('load', init);

function init() {
  showLoader();
  loadImage();
  showProverb();
}

function showLoader() {
  setTimeout(() => {
    const loader = document.querySelector('.js-loader');
    loader.classList.add('loader-is-hidden');
  }, 1000);
}