$(document).ready(function(){
  $('.next').on('click', function() {
    currentSlide++;
    if (currentSlide >= rawData.kappa.length) {
      currentSlide = rawData.kappa.length;
      $('.stage').html('<h1>Kappa Karousel</h1>');
    } else {
      $('.stage').empty();
      createSlide(currentSlide);
    };
  });

  $('.previous').on('click', function() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = -1;
      $('.stage').html('<h1>Welcome to the Kappa Karousel</h1>');
    } else {
      $('.stage').empty();
      createSlide(currentSlide);
    };
  });

});

$.ajax({
  type: "GET",
  url: "/data",
  success: function(answer){
    rawData = answer;
  }
})

//variables
var currentSlide = -1;
var rawData;


//functions


function createSlide(i) {
  $('.stage').append('<h2>Name: ' + rawData.kappa[i].name + '</h2>').fadeIn();
  $('.stage').append('<h3>Location: ' + rawData.kappa[i].location + '</h3>').fadeIn();
  $('.stage').append('<h3>Spirit Animal:' + rawData.kappa[i].spirit_animal + '</h3>').fadeIn();
  $('.stage').append('<h3>Shoutout: ' + rawData.kappa[i].shoutout + '</h3>').fadeIn();
}
