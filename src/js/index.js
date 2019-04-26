import './background.js';
import './proverb.js';
import './quote.js';
import '../css/stylesheet.css';
import '../css/style-proverb.css';
import { loadImage } from './background.js';
import { showProverb } from './proverb.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  showLoader();
  loadImage();
  showProverb();
}

function showLoader() {
  setTimeout(() => {
    const loader = document.querySelector('.js-loader');
    const main = document.querySelector('main');
    loader.classList.add('is-hidden');
    main.classList.remove('is-hidden');
  }, 1000);
}