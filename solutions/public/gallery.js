$(document).ready(function(){
  $('#new-artwork-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: '/artworks',
      method: 'POST',
      data: $('#new-artwork-form').serialize(),
      success: handleNewArtworkSuccess,
      error: handleError
    });
  });

  function handleNewArtworkSuccess(newArtworkResponse){
    console.log(newArtworkResponse);
  }

  function handleError(jqXHR, status, error){
    console.log('error:', error);
  }
});
