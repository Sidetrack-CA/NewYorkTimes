$(document).ready(function () {


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=e959f026-d4a2-411a-a3e8-070ba9b7591a";
    console.log(queryURL);
    console.log(search);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    //   $("#city").text("City: " + response.name);
    //   $("#wind").text("Wind: " + response.wind.speed);
    //   $("#humidity").text("Humidity: " + response.main.humidity);
    //   $("#temp").text("Temp: " + response.main.temp);
    });
});
