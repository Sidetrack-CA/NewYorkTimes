$(document).ready(function () {

// var doSearch = $("#search").text();
    dosearch = "antique cars"

    $("#buttonSearch").on("click", function() {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
          doSearch + "&api-key=e959f026-d4a2-411a-a3e8-070ba9b7591a";  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

    });
});
