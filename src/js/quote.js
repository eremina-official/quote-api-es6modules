import { loadNextImage } from './background.js';
import { showQuotesButton, showProverbsButton } from './proverb.js';

//cache DOM, declare variables
const proverbWrapper = document.querySelector('.proverb-container__proverb');
const quoteWrapper = document.querySelector('.proverb-container__quote');
const quoteContent = document.querySelector('.js-quote-content');
const author = document.querySelector('.js-author');
const nextQuoteButton = document.querySelector('.js-next-quote');
let uniqueUrl = 1;

//bind events
showQuotesButton.addEventListener('click', showQuotes);
nextQuoteButton.addEventListener('click', showNextQuote);

//function declarations
function callAjax() {
  const httpRequest = new XMLHttpRequest();
  /* unique URL is used so that the quote won't be cached by the browser */
  httpRequest.open('GET', `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1?sig=${uniqueUrl}`);

  httpRequest.onload = function() {
    if (httpRequest.status >= 200 && httpRequest.status < 400) {
      const quote = JSON.parse(httpRequest.responseText);
      quoteContent.innerHTML = quote[0].content;
      author.textContent = quote[0].title;
    } else {
      /* handle server connection error */
      quoteContent.textContent = 'Server returned an error';
      author.textContent = '';
    }
  };
  /* handle internet connection error */
  httpRequest.onerror = function() {
    quoteContent.textContent = 'Connection error';
    author.textContent = '';
  };

  httpRequest.send();
  uniqueUrl++;
}

function showQuotes() {
  if (quoteWrapper.classList.contains('is-not-active')) {
    proverbWrapper.classList.add('is-not-active');
    quoteWrapper.classList.remove('is-not-active');
    showProverbsButton.classList.remove('active');
    showQuotesButton.classList.add('active');
    showNextQuote();
  }
}

function showNextQuote() {
  callAjax();
  loadNextImage();
}
