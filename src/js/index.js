import './background.js';
import './proverb.js';
import './quote.js';
import '../css/stylesheet.css';
import '../css/style-proverb.css';

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.querySelector('.js-loader');
    loader.classList.add('loader-is-hidden');
  }, 300);
});
