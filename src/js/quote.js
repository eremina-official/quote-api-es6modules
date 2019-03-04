import { loadNextImage } from './background.js';
import { showQuotesButton, showProverbsButton, proverbQuoteContent, author, 
  nextQuoteButton, nextProverbButton } from './proverb.js';

//declare variables
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
      proverbQuoteContent.innerHTML = quote[0].content;
      author.textContent = quote[0].title;
    } else {
      /* handle server connection error */
      proverbQuoteContent.textContent = 'Server returned an error';
    }
  };
  /* handle internet connection error */
  httpRequest.onerror = function() {
    proverbQuoteContent.textContent = 'Connection error';
  };

  httpRequest.send();
  uniqueUrl++;
}

function showQuotes() {
  proverbQuoteContent.textContent = '';
  proverbQuoteContent.classList.remove('largefont');
  showProverbsButton.classList.remove('active');
  showQuotesButton.classList.add('active');
  nextProverbButton.classList.add('is-not-active');
  nextQuoteButton.classList.remove('is-not-active');
  showNextQuote();
}

function showNextQuote() {
  callAjax();
  loadNextImage();
}
