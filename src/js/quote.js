
import {loadNextImage} from './background.js';

//cache DOM
const $showQuotes = $('#show-quotes');
const $showProverbs = $('#show-proverbs');
const $proverb = $('#proverb');
const $nextProverb = $('#next');
const $nextQuote = $('#next-quote');
const $author = $('#author');

//bind events
$showQuotes.on('click', showQuotes);
$nextQuote.on('click', showNextQuote);

//function declarations
function callAjax() {
    $.ajax({
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    cache: false 
    /* when set to false it forces the requested page not to be cached by the browser */
  })
  .done(function(responce) {
    $proverb.html(responce[0].content);
    $author.html(responce[0].title);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    $proverb.html('Connection error');
  });
}

function showQuotes() {
  $proverb.html('');
  showNextQuote();
  $proverb.removeClass('largefont');
  $showProverbs.removeClass('active');
  $(this).addClass('active');
  $nextProverb.hide();
  $nextQuote.show();
}

function showNextQuote() {
  callAjax();
  loadNextImage();
}
