"use strict";

console.log("Let's get this party started!");
const $DISPLAY = $(".display");
const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const giphyUrl = "http://api.giphy.com/v1/gifs/search";

/**
 * Clear all appended gifs from the DOM.
 */
function removeGif() {
  $DISPLAY.empty();
}

/**
 * Accepts gif url, and appends gif to DOM element.
 */
function showGif(gif) {
  $DISPLAY.append($(`<img src="${gif}" height="400" placeholder="gif">`));
}

/**
 * Makes a GET request to Giphy API using user submitted keyword. Pulls 1st result from response and passes to showGif.
 */
async function getGif(evt) {
  evt.preventDefault();

  const $gifName = $(".search-text").val();
  console.log($gifName);

  const response = await axios.get(
    giphyUrl, { params: { q: $gifName, api_key } }
    );

  const gifUrl = response.data.data[0].images.original.url;
  console.log("get Gif response=", gifUrl);
  showGif(gifUrl);
}

$(".submit").on("click", getGif);
$(".remove-images").on("click", removeGif);