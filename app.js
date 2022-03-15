"use strict";

console.log("Let's get this party started!");

function showHand(hand) {
    let $box = $("#hand");
    $box.empty();
  
    for (let {rank, suit} of hand) {
      let t = `<p>${rank} of ${suit}</p>`;
      $box.append($(t));
    }
  }
  
  async function getGif(evt) {
      evt.preventDefault()
    let $gifName = $(".search-text").val();
    console.log($gifName)
    let api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    let response = await axios.get(
      "giphy.com/search", {param: {q: `${$gifName}`, api_key}});
    console.log("get Gif response=", response);
    showHand(response.data.hand);
  }
  
  $(".search").on("click", getGif);