$(function(){
  console.log("is it loading?")

  $("#search").on('click', executeJson);

})

function executeJson() {
  var term = $("#searchvalue").val()
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term + "&format=json&callback=?"
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json"//,
  }).done(function(data){
    console.log(data);
    var dataplus = data[1];
    console.log(dataplus)
    for (var i = 0; i < dataplus.length; i++) {
      $('.result').append(
        '<div>' + dataplus[i] + '</div>'
      )}


  })

}
