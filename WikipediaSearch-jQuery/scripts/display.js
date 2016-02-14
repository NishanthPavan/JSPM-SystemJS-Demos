var wikiSearch = require("./search");
var $ = require("jquery");

wikiSearch("JavaScript").then(function(result) {
    if(result && result.query && result.query.search){
        var rows = "";
        result.query.search.forEach(function(searchItem, index) {
            rows = rows + `<tr><td><a href="http://en.wikipedia.org/wiki/${searchItem.title}" target="_blank">${searchItem.title}</a></td><td class="snippet">${searchItem.snippet}</td></tr>`;
        });
        $("#articles tbody").html(rows);
    }
});
