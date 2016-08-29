$(document).ready(function(){
  $('#guess-number-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: '/pick-a-number',
      method: 'GET',
      data: $('#guess-number-form').serialize(),
      success: handleGuessSuccess,
      error: handleError
    });
  });

  function handleGuessSuccess(guessResponse){
    console.log(guessResponse);
    $('#high-low-correct').html(guessResponse);
  }

  $('#target-number-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: '/pick-a-number',
      method: 'POST',
      data: $('#target-number-form').serialize(),
      success: handleTargetChangeSuccess,
      error: handleError
    });
  });

  function handleTargetChangeSuccess(targetResponse){
    console.log(targetResponse);
    $('#target-number-form')[0].reset();
  }

  function handleError(jqXHR, status, error){
    console.log('error:', error);
  }
});
