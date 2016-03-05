$(document).ready(function(){

  setInterval(incrementTimer,1000);

  setInterval(checkTimer, 1000);

  function checkTimer() {
    if (timer >= 10) {
      currentSlide++;
      timer = 0;
      if (currentSlide >= rawData.kappa.length) {
        currentSlide = rawData.kappa.length;
        $('.stage').html('<h1>Kappa Karousel</h1>');
      } else {
        $('.stage').empty();
        createSlide(currentSlide);
      };
    }
  }


  $('.next').on('click', function() {
    currentSlide++;
    timer = 0;
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
    timer = 0;
    if (currentSlide < 0) {
      currentSlide = -1;
      $('.stage').html('<h1>Thats all of Kappa!</h1>');
    } else {
      $('.stage').empty();
      createSlide(currentSlide);
      $('.progress-bar').attr('aria-valuenow', currentSlide + 1);
    };
  });

});

$.ajax({
  type: "GET",
  url: "/data",
  success: function(answer){
    rawData = answer;
    $('.progress-bar').attr('aria-valuemax', rawData.kappa.length + 1);
  }
})

//variables
var currentSlide = -1;
var rawData;
var timer = 0;

//functions


function createSlide(i) {
  $('.stage').append('<h2>Name: ' + rawData.kappa[i].name + '</h2>').fadeIn();
  $('.stage').append('<h3>Location: ' + rawData.kappa[i].location + '</h3>').fadeIn();
  $('.stage').append('<h3>Spirit Animal:' + rawData.kappa[i].spirit_animal + '</h3>').fadeIn();
  $('.stage').append('<h3>Shoutout: ' + rawData.kappa[i].shoutout + '</h3>').fadeIn();
  $('.progress-bar').attr('aria-valuenow', currentSlide + 1);
  $('.progress-bar').attr('style', "width: " + Math.floor(((currentSlide + 1) / rawData.kappa.length) * 100) + "%");
}



function incrementTimer() {
  timer ++;
}
