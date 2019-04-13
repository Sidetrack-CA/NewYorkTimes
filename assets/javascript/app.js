$(document).ready(function () {

// var doSearch = $("#search").text();
    var doSearch = "antique cars"
console.log(doSearch);
    $("#buttonSearch").on("click", function() {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
          doSearch + "&api-key=xR4oAoZ4aTxWA1npAMBXyfGRnQ4sgoeB";  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      $("#web_url").text("Article Link: " + response.web_url);
      $("#headline").text("Headline: " + response.headline);
      $("#pub_date").text("Publish Date: " + response.pub_date);
      $("#lead_paragraph").text("Introduction: " + response.lead_pragraph);
    });
});
