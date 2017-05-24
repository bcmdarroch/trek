var successTreksCallback = function(response) {
  console.log("success!");
  console.log(response);

  var treksTemplate = _.template($('#trek-list').html());

  response.forEach(function(object) {
    var genHTML = treksTemplate({
      trek: object
    });
    $('#treks').append($(genHTML));
  });
};

// var successTrekCallback = function(response) {
//   console.log("success!");
//   console.log(response);
//
//   // var treksTemplate = _.template($('#trek-list').html());
//
//   for (var i = 0; i < response.length; i++) {
//     // var genHTML = treksTemplate({
//     //   trek: response[i]
//     // });
//     // $('#treks').append($(genHTML));
//
//     console.log(response[i]);
//     $('#test').append('<p>name: ' + response[i].name + '</p>');
//   }
// };

var failureCallback = function() {
  console.log("Didn't work :(");
  $("#errors").html("<h1>AJAX request failed!</h1>");
};

var alwaysCallback = function() {
  console.log("always get this");
};

const BASEURL = 'https://trektravel.herokuapp.com/trips';

var getTreks = function(event) {
  var target = $('.treks');
  target.empty();

  var url = BASEURL;
  $.get(url, successTreksCallback).fail(failureCallback).always(alwaysCallback);
};

var getTrek = function(event) {
  var target = $('.treks');
  target.empty();

  console.log($(this).id);
  // var url = BASEURL + this.id;
  // console.log(url);
  // pull id from trip object
  $.get(url, successTrekCallback).fail(failureCallback).always(alwaysCallback);
};

$(document).ready(function() {
  $('body').on('click', '#load-treks', getTreks);
  $('#treks').on('click', '#load-trek', getTrek);
});
